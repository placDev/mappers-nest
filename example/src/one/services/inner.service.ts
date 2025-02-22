import { Injectable } from '@nestjs/common';

@Injectable()
export class InnerService {
  getCoins() {
    return 150;
  }
}
