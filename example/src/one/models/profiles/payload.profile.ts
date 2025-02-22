import { BaseMapperProfile } from '@mappers/core';
import { Payload } from '../domains/payload.domain';
import { PayloadDto } from '../dtos/payload.dto';
import { ProfileMapperInterface } from '@mappers/nest';

export class PayloadProfile extends BaseMapperProfile {
  async define(mapper: ProfileMapperInterface) {
    mapper.addRule(Payload, PayloadDto).property(
      (x) => x.value,
      (x) => x.value,
      async (property) => {
        return property.toString() + '|';
      },
    );
  }
}
