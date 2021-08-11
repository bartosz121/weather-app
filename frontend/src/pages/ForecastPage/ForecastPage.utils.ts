export const validateParams = (lat: string, lng: string): boolean => {
    // '+' to bypass typescript, as it only accepts number as parameter
    if(isNaN(+lat) || isNaN(+lng)){
        return false;
    }
    return true;
}