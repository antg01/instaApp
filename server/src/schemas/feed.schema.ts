import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type FeedDocument = Feed & Document;

@Schema()
export class Feed {
  @Prop()
  title: string;

  @Prop()
  date: string;

  @Prop()
  category: string;

  @Prop()
  description: string;

  @Prop()
  comment: string;
}

export const FeedSchema = SchemaFactory.createForClass(Feed);
