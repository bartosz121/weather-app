import styled, { css } from "styled-components";

import { ButtonProps } from './button.component'

const small = css`
  font-weight: 600;
  font-size: 0.8em;
  padding: 3px;
`

const normal = css`
  font-weight: 700;
  font-size: 1em;
  padding: 4px 12px;
`

const big = css`
  font-weight: 800;
  font-size: 1.5em;
  padding: 4px 22px;
`


const bouncy = css`
  @keyframes bouncy {
    0%{top:80%}
    40%{top:80%}
    43%{top:78%}
    46%{top:80%}
    48%{top:78%}
    50%{top:80%}
    100%{top:80%;}
  } 
`

const fetchBtn = css`
  position: absolute;
  z-index: 500;
  top: 80%;
  left: 50%;
  transform: translate(-50%,-50%);
  white-space: nowrap;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;
  font-weight: 700;
  color: #0d4c75;
  padding: 12px 40px;
  border: none;
  border: 2px solid #5ABCB9;
  border-radius: 20px;
  background: #63E2C6;
  cursor: pointer;
  letter-spacing: 0.5px;
  animation: bouncy 5s infinite linear;
  transition: all .3s ease;
  ${bouncy}
  &:hover {
    background: #0d4c75;
    color: #63E2C6;
    border-color: #0d4c75;
  }
`

const getButtonSize = ({ size }: ButtonProps) => {
  switch (size) {
    case 'small':
      return small;
    case 'normal':
      return normal;
    case 'big':
      return big;
    default:
      return null;
  }
}

const ButtonContainer = styled.button<ButtonProps>`
  color: #0d4c75;
  border: 2px solid #5ABCB9;
  border-radius: 5px;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background: #63E2C6;
    border-color: #63E2C6;
  }

  ${getButtonSize}

  ${props => props.fetchBtn ? fetchBtn : null}
`


export default ButtonContainer;