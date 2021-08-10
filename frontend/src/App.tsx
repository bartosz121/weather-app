import React, { useState } from 'react'
import { LatLngExpression as LatLng } from 'leaflet';
import './App.css'

import Map from './components/map/map.component';

function App() {
  const [position, setPosition] = useState<LatLng | null>(null)
    return (
        <div className="App">
          <Map position={position} setPosition={setPosition} />
        </div>
    )
}

export default App
