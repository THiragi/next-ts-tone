/* eslint-disable camelcase */
import { WeatherData, Weather, Period } from './weatherData';

export type Temp = {
  min: number;
  max: number;
} & Period;

export type Daily = {
  sunrise: number;
  sunset: number;
  temp: Temp;
  feels_like: Period;
  weather: Weather[];
} & WeatherData;
