interface CurrentWeather {
    id: number,
    main: string,
    description: string,
    icon: string, // TODO map OWM icons to skycons
}

export default CurrentWeather;