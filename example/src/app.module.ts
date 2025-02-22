import { Module } from '@nestjs/common';
import { MappersModule } from '@mappers/nest';
import { OneModule } from './one/one.module';

@Module({
  imports: [MappersModule, OneModule],
})
export class AppModule {}
