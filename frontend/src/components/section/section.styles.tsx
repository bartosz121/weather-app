import styled from 'styled-components'

const SectionContainer = styled.div`
    color: white;
    padding: 15px 20px;
    
    .section-title {
        font-size: 1.5em;
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
`

export default SectionContainer;