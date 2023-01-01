import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  await app.listen(3000, '0.0.0.0');

  Logger.log(`🚀 Application is running on: ${await app.getUrl()}/`);
  Logger.log(`Environment at ${port}`);
}
bootstrap();
