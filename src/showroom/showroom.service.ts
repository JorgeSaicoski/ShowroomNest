import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Showroom, ShowroomDocument } from './showroom.schema';

@Injectable()
export class ShowroomService {
  constructor(
    @InjectModel(Showroom.name) private showroomModel: Model<ShowroomDocument>,
  ) {}
  async create(showroom: Showroom): Promise<Showroom> {
    const createdShowroom = new this.showroomModel(showroom);
    return createdShowroom.save();
  }
  async findAll(): Promise<Showroom[]> {
    return this.showroomModel.find().exec();
  }
  async findById(id: string): Promise<Showroom> {
    return this.showroomModel.findById(id).exec();
  }
  async update(id: string, showroom: Showroom): Promise<Showroom> {
    return this.showroomModel.findByIdAndUpdate(id, showroom, { new: true }).exec();
  }
  async delete(id: string): Promise<Showroom> {
    return this.showroomModel.findByIdAndDelete(id).exec();
  }
}
