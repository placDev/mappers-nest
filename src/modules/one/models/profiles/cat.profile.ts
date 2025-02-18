import { BaseMapperProfile } from '@mappers/core';
import { ProfileMapper } from '@mappers/core/dist/mapper/interfaces/profile-mapper.interface';
import { CatDto } from '../dtos/cat.dto';
import { Cat } from '../domains/cat.domain';

// TODO DI не работает, нужно исправить
export class CatProfile extends BaseMapperProfile {
  async define(mapper: ProfileMapper) {
    mapper
      .addRule(Cat, CatDto)
      .properties((x) => [x.id, x.name])
      .property(
        (x) => x.type,
        (x) => x.type,
      )
      .fill(
        (x) => x.coins,
        () => {},
      );

    mapper
      .addRule(CatDto, Cat)
      .callConstructor()
      .property(
        (x) => x.id,
        (x) => x.id,
        (property, from, to) => {
          return to.id;
        },
      )
      .property(
        (x) => x.name,
        (x) => x.name,
        (property, from, to) => {
          return to.name;
        },
      );
  }
}
