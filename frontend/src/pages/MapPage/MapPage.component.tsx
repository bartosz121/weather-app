import React from 'react'
import { LatLngExpression as LatLng } from 'leaflet'

import Map from '../../components/map/map.component'

interface mapPageProps {
    position: LatLng | null,
    setPosition: React.Dispatch<React.SetStateAction<LatLng | null>>
  }

const MapPage = (props: mapPageProps) => {
    return (
        <div className='map-page'>
            <Map {...props} />
        </div>
    )
}

export default MapPage
