import { Injectable } from '@nestjs/common';
import { InnerService } from './inner.service';

@Injectable()
export class OneService {
  constructor(private innerService: InnerService) {}

  getValue() {
    return this.innerService.getCoins() * 10;
  }
}
