import { Controller, Get } from '@nestjs/common';
import { OneService } from '../services/one.service';
import { Mapper } from '@mappers/core/dist/mapper/mapper';
import { InjectMapper } from '../../mapper/decorators/inject-mapper.decorator';
import { CatDto } from '../models/dtos/cat.dto';
import { Cat } from '../models/domains/cat.domain';

@Controller('one')
export class OneController {
  constructor(
    @InjectMapper() private mapper: Mapper,
    private oneService: OneService,
  ) {}

  @Get('getAll')
  async getAllCats(): Promise<CatDto[]> {
    const cats = await this.oneService.getAllCats();

    return this.mapper.map(cats, Cat, CatDto);
  }
}
