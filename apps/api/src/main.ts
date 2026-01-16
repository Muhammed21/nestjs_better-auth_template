import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { toNodeHandler } from 'better-auth/node';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false, // Enable body parsing
  });

  app.enableCors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['Set-Cookie'],
  });

  const auth = app.get('AUTH_INSTANCE');
  const API_VERSION = process.env.API_VERSION ?? 'v1';
  const express = app.getHttpAdapter().getInstance();

  express.all(new RegExp(`^/api/auth/.*$`), toNodeHandler(auth));

  app.use(cookieParser());
  app.setGlobalPrefix(`api/${API_VERSION}`);

  await app.listen(process.env.PORT ?? 8080);
}

bootstrap();
