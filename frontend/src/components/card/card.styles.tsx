import styled, { css } from 'styled-components';

import { CardProps } from './card.component';

const highlight = css`
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid white;
`

const CardContainer = styled.div<CardProps>`
    height: 150px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background: rgba(255, 255, 255, 0.15);
    padding: 5px;
    border: 1px solid transparent;
    transition: all .3s ease;
    
    ${props => props.selected ? highlight : null }

    &:hover {
        ${highlight};
    }

`;

export default CardContainer;