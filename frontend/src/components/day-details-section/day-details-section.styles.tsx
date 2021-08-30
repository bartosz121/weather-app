import styled from 'styled-components';

const DayDetailsSectionContainer = styled.div`

    .day-details-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .day-details {
        flex-grow: 1;
        flex-shrink: 0;

        .icon-with-text {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 1.2em;
        }

        &-info {
            abbr {
                font-variant: normal;
                text-decoration: underline solid;
            }

            .info-text {
                font-size: 1.2em;
            }
        }

        &-sun, &-moon {
            .icon {
                width: 70px;
                height: 70px;
            }
        }

        &-progressbars {
            flex-basis: 0; // overflow fix on mobile
        }


        h3 {
            margin-top: 0;
            margin-bottom: 5px;
            text-transform: capitalize;
        }

        .small-title {
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: capitalize;
        }
    }

    @media only screen and (min-width: 768px){
        .day-details {
            &-progressbars {
                flex-basis: auto;
            }
        }
    }

`
export default DayDetailsSectionContainer;