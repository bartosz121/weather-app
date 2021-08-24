import styled from "styled-components";

import { getBackgroundImage } from './background';

interface BackgroundImageProps {
    icon: string,
}

export const ForecastContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 10px 0 25px 0;

    @media only screen and (min-width: 1200px){
        width: 80%;
        margin: 0 auto;
    }
`

export const BackgroundImage = styled.div<BackgroundImageProps>`
    background: no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-image: url(${props => getBackgroundImage(props.icon)});
`
