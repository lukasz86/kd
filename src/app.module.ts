import { Module } from '@nestjs/common';
import { SearchController } from './modules/search/search.controller';
import { SearchModule } from './modules/search/search.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] }), SearchModule],
  controllers: [SearchController],
})
export class AppModule {}
