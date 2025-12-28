import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodValidationFilter } from './shared/presentation/filters/zod-validation.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  // app.use('/api/better-auth', toNodeHandler(auth));
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new ZodValidationFilter());

  const config = new DocumentBuilder()
    .setTitle('Desyn Gateway API')
    .setDescription('API documentation for Desyn Gateway')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors({
    origin: process.env.CLIENT_URL ?? 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 8080);
}

bootstrap();
