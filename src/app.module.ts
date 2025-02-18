import { Module } from '@nestjs/common';
import { MapperModule } from './modules/mapper/mapper.module';
import { OneModule } from './modules/one/one.module';
import { TwoModule } from './modules/two/two.module';

@Module({
  imports: [OneModule, TwoModule, MapperModule],
})
export class AppModule {}
