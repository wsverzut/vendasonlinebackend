import { CacheModule } from 'src/cache/cache.module';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CityEntity } from './entities/city.entity';
import { CityController } from './city.controller';
import { CityService } from './city.service';

@Module({
  imports: [CacheModule, TypeOrmModule.forFeature([CityEntity])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
