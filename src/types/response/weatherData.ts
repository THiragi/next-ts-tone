/* eslint-disable camelcase */
export type WeatherData = {
  dt: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: 310;
  clouds: number;
  pop?: number;
  uvi?: number;
  rain?: number;
  snow?: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type PartOfData = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts';

export type Period = {
  day: number;
  night: number;
  eve: number;
  morn: number;
};
