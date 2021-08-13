import React from 'react';


import ButtonContainer from './button.styles'

export interface ButtonProps {
    fetchBtn?: boolean,
    size?: 'small' | 'normal' | 'big',
    children: React.ReactNode,
    onClick?: () => void;
}

const Button = ({
    fetchBtn=false,
    size='normal',
    children,
     ...props
}: ButtonProps) => (
    <ButtonContainer fetchBtn={fetchBtn} size={size} {...props}>
        {children}
    </ButtonContainer>
)

export default Button;