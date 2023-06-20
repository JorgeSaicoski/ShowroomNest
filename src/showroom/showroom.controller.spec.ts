import { Test, TestingModule } from '@nestjs/testing';
import { ShowroomController } from './showroom.controller';
import { ShowroomService } from './showroom.service';

describe('ShowroomController', () => {
  let controller: ShowroomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowroomController],
      providers: [ShowroomService],
    }).compile();

    controller = module.get<ShowroomController>(ShowroomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
