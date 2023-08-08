import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Project {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  client: string;

  @Prop({ type: [{ type: String }] })
  images: string[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Showroom' })
  showroom: MongooseSchema.Types.ObjectId;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Text' }] })
  text: MongooseSchema.Types.ObjectId[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Language' })
  language: MongooseSchema.Types.ObjectId;
}

export type ProjectDocument = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project);
