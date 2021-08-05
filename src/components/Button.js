import React from 'react';
import styled from 'styled-components';
import handleCreateAccount from '../utils/handleCreateAccount';

const Btn = styled.button `
    font-size: 1.125rem;
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.watch? '2px solid #3E51CC': 'none'};
    border-radius: .5rem;
    background-color:${props => props.watch? '#F7F7F7': '#3E51CC'};
    color: ${props => props.watch? '#3913B3': '#F7F7F7'};
    cursor: pointer;
    transition: 1s;

    &:hover{
        transform: scale(1.05);
    }
    
`

const Button = ({btnText, width, height, watch, create, start}) => {

    return <Btn width={width} height={height} watch={watch} onClick={() =>handleCreateAccount(create || start)} >{btnText}  </Btn>
}

export default Button;