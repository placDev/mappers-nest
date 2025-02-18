import { Injectable } from '@nestjs/common';
import { Cat } from '../models/domains/cat.domain';

@Injectable()
export class OneService {
  async getAllCats() {
    return [
      new Cat(1, 'Барсик'),
      new Cat(2, 'Нитик'),
      new Cat(3, 'Китик'),
      new Cat(),
      new Cat(),
      new Cat(),
    ];
  }
}
