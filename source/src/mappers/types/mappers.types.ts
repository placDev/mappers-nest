import { SettingsInterface } from '@mappers/core/dist/settings/interfaces/settings.interface';

export type MapperSettingsNest = Omit<SettingsInterface, 'defaultValidator'>;
