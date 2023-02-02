import { WeatherData } from "./weather-data";

export abstract class WeatherService {
    protected static readonly CORS_URL = "https://cors-anywhere.herokuapp.com/";

    public abstract getAllRecentWeather(location: string,enableCORS: boolean) : WeatherData | null;
}