
// this is used for mocking access to a weather service
// purely for testing when the CORS anywhere is complaining due to too many requests being made

import { WeatherService } from "./weather-service";
import { WeatherData } from "./weather-data";
import mockData from "./response.json";
// The mockdata is a response from https://api.tomorrow.io/v4/weather/history/recent?location=amsterdam

export class WeatherServiceMocked extends WeatherService {
    public getAllRecentWeather(location: string, enableCORS: boolean): WeatherData | null {
        // TODO: (ilyas) make sure the data i get is the most recent one
        let data = mockData.timelines.hourly.at(0)?.values;
        if(data) {
            return new WeatherData(
                data.rainIntensity,
                data.temperatureApparent,
                data.windDirection,
                data.windSpeed,
            );
        }

        return null;
    }
}