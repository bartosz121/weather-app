import styled from 'styled-components';
import { buildStyles } from 'react-circular-progressbar';

export const CircularProgressBarStyle = buildStyles({
    strokeLinecap: 'butt',
    textSize: '1.1em',

    textColor: '#fff',
    pathColor: '#fff',
    trailColor: 'transparent'

})

export const ProgressBarSectionContainer = styled.div`
    flex-basis: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .progressbar-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        flex-shrink: 0;
        margin: 10px;

        &-title {
            color: white;
            font-size: 1.1em;
            font-weight: 500;
            letter-spacing: 0.3px;
            margin-bottom: 8px;
        }

        .progressbar {
            width: 100px;
            height: 100px;
        }
    }
`
