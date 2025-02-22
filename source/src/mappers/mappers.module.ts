import {
  DynamicModule,
  Module,
  OnApplicationBootstrap,
  Provider,
} from '@nestjs/common';
import { MapperInterface, MapperSettings } from '@mappers/core';
import { CollectType } from '@mappers/core/dist/settings/enums/collect-type.enum';
import { MapperSettingsNest } from './types/mappers.types';

@Module({})
export class MappersModule implements OnApplicationBootstrap {
  constructor() {}
  private static isBootstrap = false;

  static forRoot(settings?: MapperSettingsNest): DynamicModule {
    MapperSettings.setSettings({
      collectType: CollectType.DI,
      ...settings,
    });

    const mapperProvider = this.createMapperProvider();
    return {
      module: MappersModule,
      providers: [mapperProvider],
      exports: [mapperProvider],
      global: true,
    };
  }

  onApplicationBootstrap() {
    if (MappersModule.isBootstrap) {
      return;
    }

    MapperSettings.collectProfileInstances();
    MappersModule.isBootstrap = true;
  }

  private static createMapperProvider(): Provider<MapperInterface> {
    return {
      provide: 'MAPPER_TOKEN',
      useValue: MapperSettings.getMapper(),
    } satisfies Provider;
  }
}
