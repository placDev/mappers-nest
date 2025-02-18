import { CatsType } from '../enums/cats-type.enum';

export class Cat {
  constructor(id?: number, name?: string) {
    this.id = id ?? Math.random();
    this.name = name ?? 'Кот';
    this.type = CatsType.Good;
    this.age = 4;
  }

  id: number;
  name: string;
  type: CatsType;
  age: number;
}
