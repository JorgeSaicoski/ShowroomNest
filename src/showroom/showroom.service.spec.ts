import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ShowroomService } from './showroom.service';
import {Showroom, ShowroomDocument} from './showroom.schema';
import { CreateShowroomDto } from './dto/create-showroom.dto';
import { NotFoundException } from '@nestjs/common';
import { Language, LanguageDocument } from '../languages/languages.schema';
import { Model } from 'mongoose';

describe('ShowroomService', () => {
  let showroomService: ShowroomService;
  let showroomModel: Model<ShowroomDocument>;
  let languageModel: Model<LanguageDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShowroomService,
        {
          provide: getModelToken('Showroom'),
          useValue: {
            // Mock the necessary Model methods
            find: jest.fn().mockReturnThis(),
            findById: jest.fn().mockReturnThis(),
            findByIdAndUpdate: jest.fn().mockReturnThis(),
            findByIdAndDelete: jest.fn().mockReturnThis(),
            exec: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getModelToken('Language'),
          useValue: {
            findById: jest.fn().mockResolvedValue(mockLanguage),
          },
        },
      ],
    }).compile();

    showroomService = module.get<ShowroomService>(ShowroomService);
    showroomModel = module.get<Model<ShowroomDocument>>(getModelToken('Showroom'));
    languageModel = module.get<Model<LanguageDocument>>(getModelToken('Language'));
  });

  const mockLanguage: LanguageDocument = {
    _id: 'languageId',
    name: 'English',
    projects: [],
    showrooms: [],
    texts: [],
  } as LanguageDocument;

  const mockShowroom: ShowroomDocument = {
    _id: '1',
    name: 'Test Showroom',
    description: 'Description',
    client: 'Client',
    images: [],
    projects: [],
    language: mockLanguage._id,
  } as ShowroomDocument;

  describe('associateProject', () => {
    it('should associate a project to the showroom', async () => {
      const projectId = '2';
      const updatedShowroom: ShowroomDocument = {
        ...mockShowroom,
        projects: [projectId],
      };
      showroomModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(mockShowroom),
      });
      (showroomModel.prototype as any).save.mockResolvedValueOnce(updatedShowroom);

      const result = await showroomService.associateProject(mockShowroom._id, [
        projectId,
      ]);

      expect(showroomModel.findById).toHaveBeenCalledWith(mockShowroom._id);
      expect((showroomModel.prototype as any).save).toHaveBeenCalled();
      expect(result).toEqual(updatedShowroom);
    });

    it('should throw NotFoundException if showroom is not found', async () => {
      const projectId = '2';
      showroomModel.findById.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(null),
      });

      await expect(
          showroomService.associateProject(mockShowroom._id, [projectId]),
      ).rejects.toThrow(NotFoundException);
    });
  });
});