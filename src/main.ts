import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173', 'https://flexycode.netlify.app/'],                     // React frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',   // allow preflight/post
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(3333);                               // backend port
  console.log('Backend running on port 3333');
}
bootstrap(); 