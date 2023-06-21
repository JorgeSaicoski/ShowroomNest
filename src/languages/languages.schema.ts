import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Language {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Project' }] }) // Array of Project references
  projects: MongooseSchema.Types.ObjectId[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Showroom' }] }) // Array of Project references
  showrooms: MongooseSchema.Types.ObjectId[];
}

export type LanguageDocument = Language & Document;
export const LanguageSchema = SchemaFactory.createForClass(Language);
