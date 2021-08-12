export const validateParams = (lat: string, lng: string): boolean => {
    // '+' to bypass typescript, as it only accepts number as parameter
    if(isNaN(+lat) || isNaN(+lng)){
        return false;
    }

    const latFloat = parseFloat(lat)
    const lngFloat = parseFloat(lng)

    if(!(latFloat >= -90 && latFloat <= 90) || !(lngFloat >= -180 && lngFloat <= 180)){
        return false
    }
    return true;
}