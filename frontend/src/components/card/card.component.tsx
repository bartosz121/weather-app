import React from 'react';

import CardContainer from './card.styles';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    selected?: boolean,
    clickable?: boolean,
    children: React.ReactNode,
}

export const Card = ({ selected=false, clickable=false, children, ...props }: CardProps) => {

    return (
        <CardContainer className='card' selected={selected} clickable={clickable} {...props}>
            {children}
        </CardContainer>
    )
}
