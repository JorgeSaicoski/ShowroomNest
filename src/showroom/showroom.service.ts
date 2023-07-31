import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Showroom } from './showroom.schema';
import { CreateShowroomDto } from './dto/create-showroom.dto';
import { UpdateShowroomDto } from './dto/update-showroom.dto';
import { AssociateProjectDto } from './dto/associate-project.dto';

@Injectable()
export class ShowroomService {
  constructor(
    @InjectModel('Showroom') private readonly showroomModel: Model<Showroom>,
  ) {}
  create(dto: CreateShowroomDto): Promise<Showroom> {
    const newShowroom = new this.showroomModel(dto);
    return newShowroom.save();
  }

  async findAll(): Promise<Showroom[]> {
    return this.showroomModel.find().exec();
  }

  async findOne(id: string): Promise<Showroom> {
    const showroom = await this.showroomModel.findById(id).exec();
    if (!showroom) {
      throw new NotFoundException('Showroom not found');
    }
    return showroom;
  }

  async update(
    id: string,
    dto: UpdateShowroomDto,
  ): Promise<Showroom> {
    const updatedShowroom = await this.showroomModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updatedShowroom) {
      throw new NotFoundException('Showroom not found');
    }
    return updatedShowroom;
  }

  async remove(id: string): Promise<Showroom> {
    const deletedShowroom = await this.showroomModel.findByIdAndDelete(id).exec();
    if (!deletedShowroom) {
      throw new NotFoundException('Showroom not found');
    }
    return deletedShowroom;
  }

  async associateProject(
    showroomId: string,
    dto: AssociateProjectDto,
  ): Promise<Showroom> {
    const showroom = await this.showroomModel.findById(showroomId).exec();
    if (!showroom) {
      throw new NotFoundException('Showroom not found');
    }

    showroom.projects = [...new Set([...showroom.projects, ...dto.projects])];
    return showroom.save();
  }
}
