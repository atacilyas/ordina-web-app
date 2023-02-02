import { WeatherData } from "./weather-data";
import { WeatherService } from "./weather-service";

export class WeatherServiceTommorow extends WeatherService {
    
    private static readonly BASE_URL = "https://api.tomorrow.io/v4/";

    public getAllRecentWeather(location: string,enableCORS: boolean) : WeatherData | null {

        let queryString = new URLSearchParams(
            {
                location: location, // "amsterdam"
                units: "metric",
                apikey: "9Xug5lLfxCKGgCarSYplASPt4rJdYzjH"
            }
        ).toString();
        
        //await ?
        fetch(
            enableCORS ? WeatherService.CORS_URL : "" +
            WeatherServiceTommorow.BASE_URL +
            "weather/history/recent?" + queryString, 
            {
                "method": "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
        )

        return new WeatherData();
    }
}