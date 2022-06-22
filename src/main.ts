import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as packageJson from '../package.json';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Key drop gateway api')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = configService.get<number>('PORT');

  Logger.log(
    `${packageJson.name} v${packageJson.version} starting on port ${port}`,
    'InstanceLoader',
  );

  await app.listen(port);
}
bootstrap();
