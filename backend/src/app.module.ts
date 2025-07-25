import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteIdeasModule } from './website-ideas/website-ideas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/website-generator'),
    WebsiteIdeasModule,
  ],
})
export class AppModule {}

