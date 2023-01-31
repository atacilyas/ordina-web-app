import React from 'react';
import sun from './assets/icons/Sun.svg';
import rain from './assets/icons/Cloud-Drizzle.svg';
import wind from './assets/icons/Wind.svg';
import './App.css';
import { Card } from "./components/card/card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sun} className="App-logo" alt="logo" />
      </header>
      <body>
        <div style={{textAlign: "center"}}>
          <Card title='RAINFALL' icon={rain}>
                  <p className='card-content-title'>1.8 mm</p>
                  <p className='card-content'>in last hour</p>
          </Card>
          <Card title='FEELS LIKE' icon={rain}>
                  <p className='card-content-title'>19°</p>
          </Card>
          <Card title='WIND' icon={wind}>
                  <p className='card-content-title'>North</p>
                  <p className='card-content-title'>East</p>
                  <p className='card-content-title'>South</p>
                  <p className='card-content-title'>West</p>
          </Card>
          </div>
      </body>
    </div>
  );
}

export default App;
