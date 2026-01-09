import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodValidationFilter } from './shared/presentation/filters/zod-validation.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { toNodeHandler } from 'better-auth/node';
import cookieParser from 'cookie-parser';
import { createEndpoint } from 'better-auth';

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
  app.useGlobalFilters(new ZodValidationFilter());

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Desyn Gateway API')
    .setDescription(`API documentation for ${API_VERSION} of Desyn Gateway`)
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`api/${API_VERSION}`, app, documentFactory);

  await app.listen(process.env.PORT ?? 8080);
}

bootstrap();
