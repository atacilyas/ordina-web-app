
// this is used for mocking access to a weather service
// purely for testing when the CORS anywhere is complaining due to too many requests being made

import { WeatherService } from "./weather-service";
import { WeatherData } from "./weather-data";
import mockData from "./response.json";
// The mockdata is a response from https://api.tomorrow.io/v4/weather/history/recent?location=amsterdam

export class WeatherServiceMocked extends WeatherService {
    public getAllRecentWeather(location: string, enableCORS: boolean): Promise<WeatherData | null> {
        // The last value is the most recent data
        let data = mockData.timelines.hourly.at(-1)?.values;

        return new Promise(function (myResolve, myReject) {
            if (data) {
                myResolve(new WeatherData(
                    data.rainIntensity, // mm³/h but since this is for a 1 hour period you can just use mm
                    data.temperatureApparent, // degrees celsius
                    data.windDirection, // degrees with North being 0
                    data.windSpeed, // m/s
                ));
            }
            
            myReject();
        });
    }
}