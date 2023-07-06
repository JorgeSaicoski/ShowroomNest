import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Text {
  @Prop({ required: true })
  text: string;

  @Prop()
  project: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Project' })
  projects: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Showroom' })
  showroom: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Language' })
  language: MongooseSchema.Types.ObjectId;
}

export type TextDocument = Text & Document;
export const TextSchema = SchemaFactory.createForClass(Text);
