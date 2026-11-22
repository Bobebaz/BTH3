import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Bật Validation tự động cho DTO
  app.useGlobalPipes(new ValidationPipe());

  // Chạy độc lập ở cổng riêng (Ví dụ cổng 3001) theo nguyên tắc SOA
  const PORT = 3001;
  await app.listen(PORT);
  console.log(`Product Service đang chạy tại: http://localhost:${PORT}`);
}
bootstrap();