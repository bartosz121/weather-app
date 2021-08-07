import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, LatLngExpression as LatLng } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

import LeafletContainer from './map.styles';

const placeMarker = (map: LeafletMap, position: LatLng): void => {
    map.flyTo(position);
}

const Map = () => {
    const [position, setPosition] = useState<LatLng>([20, 0])

    return (
        <LeafletContainer>
            <MapContainer
                center={position}
                zoom={3}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                    <Popup>
                        {position.toString}
                    </Popup>
                </Marker>
            </MapContainer>
        </LeafletContainer>
    )
}

export default Map;