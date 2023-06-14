import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export type ShowroomDocument = Showroom & Document;
export const ShowroomSchema = SchemaFactory.createForClass(Showroom);