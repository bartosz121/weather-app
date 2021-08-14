interface LocationResponse {
    place_id: number,
    osm_type: string,
    osm_id: number,
    lat: string,
    lon: string,
    name: string,
    display_name: string,
    category: string,
    type: string,
    importance: number,
    place_rank: number,
    addresstype: string,
    licence: string,
    boundingbox: Array<string>,
    icon?: string,
    error?: string,
}

export const getLocationName = (locationData: LocationResponse): string => {
    if(locationData.error){
        return 'Location Unknown';
    } return locationData.display_name;
}