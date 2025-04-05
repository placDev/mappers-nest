import { validate, ValidationError } from 'class-validator';
import { BaseMapperValidator } from '@mappers/core';

export class ClassMapperValidator extends BaseMapperValidator {
  async validate(item: any) {
    await this.validateOrThrow(item);
  }

  async validateOrThrow(instance: object) {
    const errors: ValidationError[] = await validate(instance);

    if (errors.length > 0) {
      const formattedErrors = errors.map((error) => ({
        property: error.property,
        constraints: error.constraints,
        value: error.value,
      }));

      throw new Error(
        JSON.stringify(
          {
            message: 'Validation failed',
            errors: formattedErrors,
          },
          null,
          2,
        ),
      );
    }
  }
}
