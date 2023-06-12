import { Injectable } from '@nestjs/common';
import { Project } from './interfaces';
import { CreateProjectDto, UpdateProjectDto } from './dto';

@Injectable()
export class ShowroomService {
  private projects: Project[] = [];

  getAllProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project {
    return this.projects.find((project) => project.id === id);
  }

  createProject(createProjectDto: CreateProjectDto): Project {
    const newProject: Project = {
      id: /* generate or assign a unique ID */,
      ...createProjectDto,
    };
    this.projects.push(newProject);
    return newProject;
  }

  updateProject(id: string, updateProjectDto: UpdateProjectDto): Project {
    const projectIndex = this.projects.findIndex((project) => project.id === id);
    if (projectIndex !== -1) {
      this.projects[projectIndex] = {
        ...this.projects[projectIndex],
        ...updateProjectDto,
      };
      return this.projects[projectIndex];
    }
    return null;
  }

  deleteProject(id: string): Project {
    const projectIndex = this.projects.findIndex((project) => project.id === id);
    if (projectIndex !== -1) {
      const deletedProject = this.projects.splice(projectIndex, 1)[0];
      return deletedProject;
    }
    return null;
  }
}