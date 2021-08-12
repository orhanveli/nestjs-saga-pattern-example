import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 5500;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  const logger = new Logger();
  logger.log(`App is up and running at http://localhost:${port}`);
}
bootstrap();
