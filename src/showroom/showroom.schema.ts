import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Showroom {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  client: string;

  @Prop()
  images: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Project' }] }) // Array of Project references
  projects: MongooseSchema.Types.ObjectId[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Language' })
  language: MongooseSchema.Types.ObjectId;
}

export type ShowroomDocument = Showroom & Document;
export const ShowroomSchema = SchemaFactory.createForClass(Showroom);
