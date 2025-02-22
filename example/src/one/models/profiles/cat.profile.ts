import { BaseMapperProfile } from '@mappers/core';
import { Cat } from '../domains/cat.domain';
import { CatDto } from '../dtos/cat.dto';
import { Payload } from '../domains/payload.domain';
import { PayloadDto } from '../dtos/payload.dto';
import { CatType } from '../enums/cat-type.enum';
import { ProfileMapperInterface } from '@mappers/nest';

export class CatProfile extends BaseMapperProfile {
  async define(mapper: ProfileMapperInterface) {
    mapper
      .addRule(Cat, CatDto)
      .properties((x) => [x.name, x.id])
      .property(
        (x) => x.type,
        (x) => x.type,
        () => CatType.Bad,
      )
      .byRule(
        (x) => x.payload,
        (x) => x.payload,
        mapper.withRule(Payload, PayloadDto),
      )
      .fill(
        (x) => x.newValue,
        () => {
          return true;
        },
      );
  }
}
