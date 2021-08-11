import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import { LatLngLiteral as LatLng } from 'leaflet';
import './App.css'

import MapPage from './pages/MapPage/MapPage.component';
import ForecastPage from './pages/ForecastPage/ForecastPage.component';

function App() {
  const [position, setPosition] = useState<LatLng | null>(null)
    return (
        <div className="App">
          <Switch>
            <Route exact path='/' >
              <MapPage position={position} setPosition={setPosition} />
            </Route>
            <Route path='/:lat,:lng'>
              <ForecastPage />
            </Route>
          </Switch>
        </div>
    )
}

export default App
