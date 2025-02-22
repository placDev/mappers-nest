import { Module } from '@nestjs/common';
import { OneController } from './controllers/one.controller';
import { InnerService } from './services/inner.service';
import { OneService } from './services/one.service';
import { PayloadProfile } from './models/profiles/payload.profile';
import { CatProfile } from './models/profiles/cat.profile';

@Module({
  controllers: [OneController],
  providers: [InnerService, OneService, PayloadProfile, CatProfile],
})
export class OneModule {}
