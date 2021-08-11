import { useEffect } from 'react';
import { LatLngLiteral as LatLng, LeafletMouseEvent } from 'leaflet';
import { Marker, Popup, useMap, useMapEvent } from 'react-leaflet';

export const GeoSearchStopOnClick = () => {
  const map = useMap()
  map.getContainer()
  //@ts-ignore
  map.getContainer().lastChild.onclick = e => { e.stopPropagation() }
  return null;
}

interface AskForGeolocationProps {
  setPosition: React.Dispatch<React.SetStateAction<LatLng | null>>,
  maxZoomLevelFlyTo: number
}

export const AskForGeolocation = ({ setPosition, maxZoomLevelFlyTo }: AskForGeolocationProps) => {
  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      map.flyTo(e.latlng, map.getZoom() > maxZoomLevelFlyTo ? map.getZoom() : maxZoomLevelFlyTo)
      setPosition(e.latlng)
    })
  }, [])

  return null;
}

interface AddMarkerProps {
  position: LatLng | null,
  setPosition: React.Dispatch<React.SetStateAction<LatLng | null>>,
  maxZoomLevelFlyTo: number
}

export const AddMarker = ({ position, setPosition, maxZoomLevelFlyTo }: AddMarkerProps) => {
  const map = useMap();

  useMapEvent('click', (e: LeafletMouseEvent) => {
    map.flyTo(e.latlng, map.getZoom() > maxZoomLevelFlyTo ? map.getZoom() : maxZoomLevelFlyTo)
    setPosition(e.latlng)
  })

  // TODO https://github.com/smeijer/leaflet-geosearch#results
  map.on('geosearch/showlocation', (e: any) => {
    const pos: LatLng = {
      lat: parseFloat(e.location.y),
      lng: parseFloat(e.location.x),
    }
    setPosition(pos)
  })

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
};