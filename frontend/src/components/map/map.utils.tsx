import { useEffect } from 'react';
import { LatLngExpression as LatLng, LeafletMouseEvent } from 'leaflet';
import { Marker, Popup, useMap, useMapEvent } from 'react-leaflet';

export const GeoSearchStopOnClick = () => {
  const map = useMap()
  map.getContainer()
  //@ts-ignore
  map.getContainer().lastChild.onclick = e => { e.stopPropagation() }
  return null;
}

export const AskForGeolocation = ({ setPosition, flyToMaxZoomLevel }: { setPosition: any, flyToMaxZoomLevel: number }) => {
  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      map.flyTo(e.latlng, map.getZoom() > flyToMaxZoomLevel ? map.getZoom() : flyToMaxZoomLevel)
      setPosition(e.latlng)
    })
  }, [])

  return null;
}

export const AddMarker = ({ position, setPosition, flyToMaxZoomLevel }: any) => {
  const map = useMap();

  useMapEvent('click', (e: LeafletMouseEvent) => {
    map.flyTo(e.latlng, map.getZoom() > flyToMaxZoomLevel ? map.getZoom() : flyToMaxZoomLevel)
    setPosition(e.latlng)
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