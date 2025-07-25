import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WebsiteIdea, WebsiteIdeaDocument } from './website-idea.schema';

@Injectable()
export class WebsiteIdeasService {
  constructor(
    @InjectModel(WebsiteIdea.name) private websiteIdeaModel: Model<WebsiteIdeaDocument>,
  ) {}

  async generateSections(idea: string): Promise<string[]> {
    // Simple logic to generate sections based on the idea
    const lowerIdea = idea.toLowerCase();
    
    if (lowerIdea.includes('bakery') || lowerIdea.includes('restaurant') || lowerIdea.includes('food')) {
      return ['Hero', 'Our Offerings', 'About Us & Contact'];
    } else if (lowerIdea.includes('portfolio') || lowerIdea.includes('personal')) {
      return ['Hero', 'About Me', 'Portfolio', 'Contact'];
    } else if (lowerIdea.includes('business') || lowerIdea.includes('company')) {
      return ['Hero', 'Services', 'About Us', 'Contact'];
    } else if (lowerIdea.includes('blog') || lowerIdea.includes('news')) {
      return ['Hero', 'Latest Posts', 'Categories', 'About'];
    } else if (lowerIdea.includes('ecommerce') || lowerIdea.includes('shop') || lowerIdea.includes('store')) {
      return ['Hero', 'Featured Products', 'Categories', 'Cart & Checkout'];
    } else {
      // Default sections for any other type
      return ['Hero', 'Features', 'About', 'Contact'];
    }
  }

  async createWebsiteIdea(idea: string): Promise<WebsiteIdea> {
    const sections = await this.generateSections(idea);
    const websiteIdea = new this.websiteIdeaModel({ idea, sections });
    return websiteIdea.save();
  }

  async findAll(): Promise<WebsiteIdea[]> {
    return this.websiteIdeaModel.find().exec();
  }

  async findOne(id: string): Promise<WebsiteIdea> {
    return this.websiteIdeaModel.findById(id).exec();
  }
}

