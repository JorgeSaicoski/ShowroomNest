import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ShowroomService } from './showroom.service';
import { CreateProjectDto, UpdateProjectDto } from './dto';

@Controller('showroom')
export class ShowroomController {
  constructor(private readonly showroomService: ShowroomService) {}

  @Get('projects')
  async getAllProjects() {
    return this.showroomService.getAllProjects();
  }

  @Get('projects/:id')
  async getProjectById(@Param('id') id: string) {
    return this.showroomService.getProjectById(id);
  }

  @Post('projects')
  async createProject(@Body() createProjectDto: CreateProjectDto) {
    return this.showroomService.createProject(createProjectDto);
  }

  @Put('projects/:id')
  async updateProject(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.showroomService.updateProject(id, updateProjectDto);
  }

  @Delete('projects/:id')
  async deleteProject(@Param('id') id: string) {
    return this.showroomService.deleteProject(id);
  }
}

