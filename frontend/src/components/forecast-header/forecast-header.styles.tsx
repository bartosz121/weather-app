import styled from 'styled-components';

const ForecastHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    .location-name {
        width: 75%;
        text-align: center;
        font-size: 1.1em;
    }

    .current-temp-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;

        .current-temp{
            font-size: 4em;
        }
    }

    .current-description {
        font-size: 1.8em;
        text-align: center;
        text-transform: capitalize;
        width: 90%;
        margin-bottom: 5px;
    }

    .when-fetched {
        font-size: 0.9em;
        font-weight: 600;
    }

    .current-info-container {
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        margin-top: 5px;
        font-size: 0.8em;

        .current-info {
            margin: 3px;
        }
    }

    @media only screen and (min-width: 576px){

        .location-name {
            font-size: 1.4em;
        }

        .current-temp-container {
            flex-direction: row;
            justify-content: center;

            .current-temp {
                font-size: 6em;
            }
        }

        .current-description {
            font-size: 1.9em;
        }
    }

    @media only screen and (min-width: 768px){
        .current-temp-container {
            .current-temp {
                font-size: 6em;
            }
        }

        .current-description {
            font-size: 2.2em;
        }
    }

    @media only screen and (min-width: 992px){
        .location-name {
            font-size: 1.6em;
        }

        .current-description {
            font-size: 2.4em;
        }
    }

    @media only screen and (min-width: 1200px){
    }

`

export default ForecastHeaderContainer;