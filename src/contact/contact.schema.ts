import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Project {
  @Prop({ required: true })
  name: string;

  @Prop()
  message: string;

  @Prop()
  client: string;

  @Prop()
  contact: string;
}

export type ProjectDocument = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project);
