import styled from 'styled-components';

const AlertsSectionContainer = styled.div`
    .alert-wrapper {
        margin: 15px 0;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.1);
        transition: background-color .3s ease;

        &:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }

        .alert-event {
            font-size: 1.1em;
            font-weight: 600;
            letter-spacing: 0.5px;
            line-height: 1.1;
            width: fit-content;
            margin-bottom: 2px;
        }

        .alert-sender, .alert-time {
            font-size: 0.8em;
            color: rgba(255, 255, 255, 0.6);
        }

        .alert-description {
            padding-top: 5px;
        }
    }

    @media only screen and (min-width: 576px){
        .alert-wrapper {
            .alert-event {
                font-size: 1.2em;
            }
        }
    }

    @media only screen and (min-width: 1200px){
        .alert-wrapper {

            .alert-event {
                font-size: 1.4em;
            }

            .alert-description {
                font-size: 1.2em;
            }
        }
    }
`

export default AlertsSectionContainer;