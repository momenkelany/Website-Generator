import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for all origins
  app.use(cors({
    origin: true,
    credentials: true,
  }));
  
  // Listen on all interfaces
  await app.listen(3001, '0.0.0.0');
  console.log('Backend server running on http://0.0.0.0:3001');
}
bootstrap();

