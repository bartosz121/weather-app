import React, { useState } from 'react';
import { LatLngExpression as LatLng } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
//@ts-ignore
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch';

import { GeoSearchStopOnClick, AskForGeolocation, AddMarker } from './map.utils';

import LeafletContainer from './map.styles';

interface mapProps {
  position: LatLng | null,
  setPosition: React.Dispatch<React.SetStateAction<LatLng | null>>
}

const Map = ({position, setPosition}: mapProps) => {
  const provider = OpenStreetMapProvider();
  const maxZoomLevelFlyTo = 10;

  return (
    <LeafletContainer>
      <MapContainer
        center={[20, 0]}
        zoom={3}
        minZoom={3}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <SearchControl
          provider={provider}
          style={'button'}
          position={'bottomright'}
          showMarker={false}
          showPopup={false}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={true}
          searchLabel={'Enter address'}
          keepResult={false}
        />
        <GeoSearchStopOnClick />
        <AskForGeolocation setPosition={setPosition} maxZoomLevelFlyTo={maxZoomLevelFlyTo}/>
        <AddMarker position={position} setPosition={setPosition} maxZoomLevelFlyTo={maxZoomLevelFlyTo}/>
      </MapContainer>
      { position ? <button className='fetch-btn bouncy'>Check Forecast</button> : null}
    </LeafletContainer>
  )
}

export default Map;