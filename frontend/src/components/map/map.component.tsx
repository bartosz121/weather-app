import { useState } from 'react';
import { LatLngExpression as LatLng, LeafletMouseEvent } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent, useMapEvents } from 'react-leaflet';
//@ts-ignore
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch';

import { GeoSearchStopOnClick, AskForGeolocation, AddMarker } from './map.utils';

import LeafletContainer from './map.styles';

const Map = () => {
  const [position, setPosition] = useState<LatLng | null>(null)
  const provider = OpenStreetMapProvider();
  const flyToMaxZoomLevel = 10;

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
        <AskForGeolocation setPosition={setPosition} flyToMaxZoomLevel={flyToMaxZoomLevel}/>
        <AddMarker position={position} setPosition={setPosition} flyToMaxZoomLevel={flyToMaxZoomLevel}/>
      </MapContainer>
    </LeafletContainer>
  )
}

export default Map;