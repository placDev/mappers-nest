import { CatsType } from '../enums/cats-type.enum';

export class CatDto {
  id: number;
  name: string;
  type: CatsType;
  coins: number;
}
