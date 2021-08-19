import styled from 'styled-components'

const SectionContainer = styled.div`
    color: white;
    padding: 15px 20px;
    
    .section-title {
        font-size: 1.5em;
    }

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

    .gallery {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-user-select: none;  /* Chrome all / Safari all */
        -moz-user-select: none;     /* Firefox all */
        -ms-user-select: none;      /* IE 10+ */
        user-select: none;          /* Likely future */   
        -webkit-overflow-scrolling: touch;

        scrollbar-color: rgba(255, 255, 255, 0.6) rgba(255, 255, 255, 0.3);
        scrollbar-width: thin;

        &::-webkit-scrollbar {
            height: 8px;
            width: 8px;
        }
        
        &::-webkit-scrollbar-track {
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 100px;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 100px;
        }



        .card {
            height: fit-content;
            flex-basis: 150px;
            flex-grow: 1;
            flex-shrink: 0;

            &-feels-like, &-pop {
                color: rgba(255, 255, 255, 0.6);
                font-size: 0.9em;
            }

            &-pop {
                justify-content: center;
                align-items: center;
            }

            &-description {
                text-transform: capitalize;
                text-align: center;
                width: 95%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                &:hover{
                    white-space: normal;
                    overflow: visible;
                    text-overflow: unset;
                }
            }
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

export default SectionContainer;