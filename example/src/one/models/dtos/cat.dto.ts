import { CatType } from '../enums/cat-type.enum';
import { PayloadDto } from './payload.dto';

export class CatDto {
  id: number;
  name: string;
  type: CatType;
  payload: PayloadDto;
  newValue: boolean;
}
