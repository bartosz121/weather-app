import styled from "styled-components";

import { getBackgroundImage } from './background';

interface BackgroundImageProps {
    icon: string,
}

export const ForecastContainer = styled.div`
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 0 25px 0;
    background: rgba(0,0,0, 0.3);
    box-shadow: 0 0 80px 80px rgba(0,0,0, 0.3);

    @media only screen and (min-width: 1200px){
        width: 80%;
    }
    @media only screen and (min-height: 2160px){
        top: 20%;
    }
`

export const BackgroundImage = styled.div<BackgroundImageProps>`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    height:100%;
    width: 100%;
    background-image: url(${props => getBackgroundImage(props.icon)});
`
