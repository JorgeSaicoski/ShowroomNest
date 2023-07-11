/*
import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { Project } from './project.schema';

describe('ProjectsController', () => {
  let controller: ProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        ProjectsService,
        {
          provide: Project,
          useValue: {}, // Mock the ProjectModel or use a real instance
        },
      ],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
  });
});


 */