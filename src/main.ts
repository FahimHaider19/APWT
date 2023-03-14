import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60, // 1 hour
      },
    })
  );
  await app.listen(3000);
}
bootstrap();
