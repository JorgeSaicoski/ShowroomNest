import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ShowroomService } from './showroom.service';
import { Showroom } from './interfaces';

@Controller('showrooms')
export class ShowroomController {
  constructor(private readonly showroomService: ShowroomService) {}

  @Post()
  async create(@Body() showroom: Showroom): Promise<Showroom> {
    return this.showroomService.create(showroom);
  }

  @Get()
  async findAll(): Promise<Showroom[]> {
    return this.showroomService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Showroom> {
    return this.showroomService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() showroom: Showroom): Promise<Showroom> {
    return this.showroomService.update(id, showroom);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Showroom> {
    return this.showroomService.delete(id);
  }
}
