import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Configures global pipes for the NestJS application.
   * @param {Object} app - The NestJS application instance.
   */
  app.useGlobalPipes(
    /**
     * Sets up a global ValidationPipe to handle input validation for incoming requests.
     * @param {Object} {
     *   whitelist - If true, strips any properties from DTOs that do not have corresponding decorated properties.
     *   forbidNonWhitelisted - If true, rejects requests with properties not decorated in DTOs.
     * }
     */
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions:{
        enableImplicitConversion: true
      }
    })
  );


  await app.listen(3000);
}
bootstrap();
