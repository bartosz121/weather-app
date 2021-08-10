import { useState } from 'react';
import { LatLngExpression as LatLng, LeafletMouseEvent } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet';
//@ts-ignore
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch';

import LeafletContainer from './map.styles';

const GeoSearchStopOnClick = () => {
  const map = useMap()
  map.getContainer()
  //@ts-ignore
  map.getContainer().lastChild.onclick = e => { e.stopPropagation() }
  return null;
}

const AddMarker = () => {
  const [position, setPosition] = useState<LatLng | null>(null);
  const flyToMaxZoomLevel = 10;
  const map = useMap();

  useMapEvent('click', (e: LeafletMouseEvent) => {
    map.flyTo(e.latlng, map.getZoom() > flyToMaxZoomLevel ? map.getZoom() : flyToMaxZoomLevel)
    setPosition(e.latlng)
  })

  map.addEventListener('geosearch/showlocation', (e) => {

  })

  // TODO https://github.com/smeijer/leaflet-geosearch#results
  map.on('geosearch/showlocation', (e: any) => {
    const pos: LatLng = [
      parseFloat(e.location.y),
      parseFloat(e.location.x),
    ]
    setPosition(pos)
  })

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
};

const Map = () => {
  const provider = OpenStreetMapProvider();


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
        <AddMarker />
      </MapContainer>
    </LeafletContainer>
  )
}

export default Map;