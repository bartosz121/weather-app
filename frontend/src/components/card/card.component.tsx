import React from 'react';

import CardContainer from './card.styles';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    selected?: boolean,
    children: React.ReactNode,
}

export const Card = ({ selected=false, children, ...props }: CardProps) => {

    return (
        <CardContainer className='card' selected={selected} {...props}>
            {children}
        </CardContainer>
    )
}
