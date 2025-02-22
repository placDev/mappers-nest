import { CatType } from '../enums/cat-type.enum';
import { Payload } from './payload.domain';

export class Cat {
  id: number = 1;
  name: string = 'Барсик';
  age: number = 10;
  type: CatType = CatType.Good;
  payload: Payload = new Payload();
}
