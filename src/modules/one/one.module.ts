import { Module } from '@nestjs/common';
import { OneController } from './controllers/one.controller';
import { OneService } from './services/one.service';
import { MapperModule } from '../mapper/mapper.module';
import { CatProfile } from './models/profiles/cat.profile';

@Module({
  imports: [MapperModule.forFeature([CatProfile])],
  controllers: [OneController],
  providers: [OneService],
})
export class OneModule {}
