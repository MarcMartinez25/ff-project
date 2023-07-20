import { ForecastReport } from "./ForecastReport"

export interface Airport {
  name: string,
  icao: string,
  location: string,
  latitude: number,
  longitude: number,
  time: string,
  flightCategory: string,
  altimeter: number,
  temperatureF: number,
  dewpointF: number,
  relativeHumidity: number,
  visibility: string,
  windSpeedMPH: number,
  windDirection: number
  cloudCoverage: string,
  forecastReports: ForecastReport[],
  runwayInUse: string
}