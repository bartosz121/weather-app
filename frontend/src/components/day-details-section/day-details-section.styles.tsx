import styled from 'styled-components';

const DayDetailsSectionContainer = styled.div`

    .day-details {
        flex-grow: 1;
        flex-shrink: 0;

        .icon-with-text {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 1.2em;
        }

        &-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        &-info {
            margin: 5px 0;
        }

        &-temp {
            .temp-text {
                font-size: 1.2em;
            }
        }

        &-sun, &-moon {
            .icon {
                width: 70px;
                height: 70px;
            }
        }


        h3{
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
`

export default DayDetailsSectionContainer;