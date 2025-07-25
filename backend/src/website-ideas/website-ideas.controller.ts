import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WebsiteIdeasService } from './website-ideas.service';
import { WebsiteIdea } from './website-idea.schema';

export class CreateWebsiteIdeaDto {
  idea: string;
}

@Controller('api/website-ideas')
export class WebsiteIdeasController {
  constructor(private readonly websiteIdeasService: WebsiteIdeasService) {}

  @Post()
  async create(@Body() createWebsiteIdeaDto: CreateWebsiteIdeaDto): Promise<WebsiteIdea> {
    return this.websiteIdeasService.createWebsiteIdea(createWebsiteIdeaDto.idea);
  }

  @Get()
  async findAll(): Promise<WebsiteIdea[]> {
    return this.websiteIdeasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<WebsiteIdea> {
    return this.websiteIdeasService.findOne(id);
  }

  @Post('generate-sections')
  async generateSections(@Body() body: { idea: string }): Promise<{ sections: string[] }> {
    const sections = await this.websiteIdeasService.generateSections(body.idea);
    return { sections };
  }
}

