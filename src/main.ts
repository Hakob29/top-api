import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './auth/exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter())
  const config = app.get(ConfigService);
  const host = config.get("HOST");
  const port = config.get("PORT");
  await app.listen(port || 3001, () => {
    console.log("Serves has been connected to " + host + port)
  });
}
bootstrap();  
