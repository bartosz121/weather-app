import React from 'react';

import SectionContainer from './section.styles';

interface SectionProps {
    title: string,
    children: React.ReactNode,
}

const Section = ({ title, children, ...props}: SectionProps) => {
    return (
        <SectionContainer {...props}>
            <div className="section-title">{title}</div>
            <hr className="white" />
            <div className="section-content">{children}</div>
        </SectionContainer>
    )
}

export default Section;