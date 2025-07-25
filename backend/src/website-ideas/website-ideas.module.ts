import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteIdeasController } from './website-ideas.controller';
import { WebsiteIdeasService } from './website-ideas.service';
import { WebsiteIdea, WebsiteIdeaSchema } from './website-idea.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WebsiteIdea.name, schema: WebsiteIdeaSchema }]),
  ],
  controllers: [WebsiteIdeasController],
  providers: [WebsiteIdeasService],
})
export class WebsiteIdeasModule {}

