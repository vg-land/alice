import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { IoAdapter } from './adapters/io.adapter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useWebSocketAdapter(
    new IoAdapter(app, {
      cors: {
        origin: '*',
      },
    }),
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(4100);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
