import {
  DynamicModule,
  Module,
  OnApplicationBootstrap,
  Provider,
} from '@nestjs/common';
import {
  BaseMapperProfile,
  MapperSettings,
  ConstructorType,
} from '@mappers/core';
import { Mapper } from '@mappers/core/dist/mapper/mapper';

@Module({})
export class MapperModule implements OnApplicationBootstrap {
  private static profiles = new Set<ConstructorType<BaseMapperProfile>>();
  private static isBootstrap = false;

  static forFeature(
    profiles: ConstructorType<BaseMapperProfile>[],
  ): DynamicModule {
    for (const profile of profiles) {
      this.profiles.add(profile);
    }

    const mapperProvider = this.createMapperProvider();

    return {
      module: MapperModule,
      providers: [mapperProvider],
      exports: [mapperProvider],
    };
  }

  onApplicationBootstrap() {
    if (MapperModule.isBootstrap) {
      return;
    }

    for (const profile of MapperModule.profiles) {
      MapperSettings.addProfile(profile);
    }
    MapperSettings.collectRules();

    console.log(
      'Заколлектились',
      [...MapperModule.profiles].map((x) => x.name),
    );

    MapperModule.isBootstrap = true;
  }

  private static createMapperProvider(): Provider<Mapper> {
    return {
      provide: 'MAPPER_TOKEN',
      useValue: MapperSettings.getMapper(),
    } satisfies Provider;
  }
}
