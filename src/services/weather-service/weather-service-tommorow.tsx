import { WeatherData } from "./weather-data";
import { WeatherService } from "./weather-service";

export class WeatherServiceTommorow extends WeatherService {
    
    private static readonly BASE_URL = "https://api.tomorrow.io/v4/";

    public getAllRecentWeather(location: string,enableCORS: boolean) : Promise<WeatherData | null> {
        let queryString = new URLSearchParams(
            {
                location: location, // "For example: amsterdam"
                units: "metric",
                apikey: "9Xug5lLfxCKGgCarSYplASPt4rJdYzjH" // TODO: (ilyas) hide this as a secret
            }
        ).toString();
        
        return fetch(
            (enableCORS ? WeatherService.CORS_URL : "") +
            WeatherServiceTommorow.BASE_URL +
            "weather/history/recent?" + queryString, 
            {
                "method": "GET",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
        )
        .then(value => {
            return value.json().then((data) => {
                let value = data.timelines.hourly.at(-1)?.values;
                   if (value) {
                    return new WeatherData(
                        value.rainIntensity, // mm³/h but since this is for a 1 hour period you can just use mm
                        value.temperatureApparent, // degrees celsius
                        value.windDirection, // degrees with North being 0
                        value.windSpeed, // m/s
                    );
                }
    
                throw "No hourly data received";
            });
        })
    }
}