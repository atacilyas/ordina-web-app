import "./home.css"
import React from 'react';

import { Card } from "../../components/card/card";
//import { WeatherService } from "../../services/weather-service";
import t from '../../i18n/i18n';
import * as assets from '../../assets/assets.js';
import { WeatherServiceMocked } from "../../services/weather-service/weather-service-mocked";
import { WeatherData } from "../../services/weather-service/weather-data";

// Do this on start of app
// Set state as loading until data has come in
// Show correct data once loaded
async function loadAllData() {
  let data = (new WeatherServiceMocked()).getAllRecentWeather("amsterdam", true)
  console.log(data);
  return data;
}

type HomePageState = {
  data: WeatherData | null;
}

export class HomePage extends React.Component<any, HomePageState> {
  constructor(props: any) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount(): void {
    loadAllData().then((result) => {
      this.setState({data: result});
    });
  }

  render(): React.ReactNode {
    // Show a loading message until {loadAllData()} finishes
    let content = <h1>{t('loading-message')}</h1>;
    if (this.state.data) {
      content = <section style={{ textAlign: "center" }}>
        <Card title={t('precipitation-title-card')} icon={assets.CloudDrizzle}>
          <p className='card-content-title'>{this.state.data?.precipitationLastHour ?? "??"} mm</p>
          <p className='card-content'>{t("precipitation-duration")}</p>
        </Card>
        <Card title={t('temperature-title-card')} icon={assets.Thermometer}>
          <p className='card-content-title'>{this.state.data?.currentTemperature ?? "??"}°</p>
        </Card>
        <Card title={t('wind-direction-title-card')} icon={assets.Wind}>
          <p>North</p>
          <p>East</p>
          <p>South</p>
          <p>West</p>
        </Card>
      </section>;
    }
    return (<div className="home">
      <header className="home-header">
        <img src={assets.Moon} className="home-logo" alt="logo" />
      </header>
      <div>
        <section style={{ textAlign: "center" }}>
          {content}
        </section>
      </div>
    </div>);
  }
}