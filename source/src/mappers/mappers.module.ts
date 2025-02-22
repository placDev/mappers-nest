import {
  DynamicModule,
  Module,
  OnApplicationBootstrap,
  Provider,
} from '@nestjs/common';
import { MapperInterface, MapperSettings } from '@mappers/core';
import { CollectType } from '@mappers/core/dist/settings/enums/collect-type.enum';
import { MapperSettingsNest } from './types/mappers.types';
import { SettingsError } from '@mappers/core/dist/errors/settings/settings.error';

@Module({})
export class MappersModule implements OnApplicationBootstrap {
  constructor() {
    if (!MappersModule.startFromForRoot) {
      throw new SettingsError(
        'Модуль MappersModule должен быть создан через .forRoot()',
      );
    }
  }
  private static isBootstrap = false;
  private static startFromForRoot = false;

  static forRoot(settings?: MapperSettingsNest): DynamicModule {
    this.startFromForRoot = true;

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
