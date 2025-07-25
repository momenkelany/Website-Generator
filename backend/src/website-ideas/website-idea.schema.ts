import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WebsiteIdeaDocument = WebsiteIdea & Document;

@Schema({ timestamps: true })
export class WebsiteIdea {
  @Prop({ required: true })
  idea: string;

  @Prop({ type: [String], required: true })
  sections: string[];
}

export const WebsiteIdeaSchema = SchemaFactory.createForClass(WebsiteIdea);

