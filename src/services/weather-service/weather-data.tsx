
export class WeatherData {
    constructor(
        precipitationLastHour : number = 0,
        currentTemperature : number = 0,
        windDirection : number = 0,
        windStrength : number = 0,
        ) {
        this.precipitationLastHour = precipitationLastHour;
        this.currentTemperature = currentTemperature;
        this.windDirection = windDirection;
        this.windStrength = windStrength;
    }

    precipitationLastHour : number;
    currentTemperature : number;
    windDirection : number;
    windStrength : number;
}