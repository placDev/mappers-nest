import { Controller, Get } from '@nestjs/common';
import { Cat } from '../models/domains/cat.domain';
import { InjectMapper, MapperInterface } from '@mappers/nest';
import { CatDto } from '../models/dtos/cat.dto';

@Controller('one')
export class OneController {
  constructor(@InjectMapper() private mapper: MapperInterface) {}

  @Get('test')
  async test() {
    const value = new Cat();

    const valueDto = await this.mapper.autoMap(value, CatDto);
  }
}
