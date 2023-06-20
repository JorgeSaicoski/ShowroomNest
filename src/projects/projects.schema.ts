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

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Showroom' }) // Reference to Showroom schema
  showroom: MongooseSchema.Types.ObjectId;
  /* !!
  Here will come the language schema that will have a  list of projects and one showroom.
  */
}

export type ProjectDocument = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project);
