import React from 'react'
import styled from 'styled-components'

const Btn = styled.button `
    font-size: 1.125rem;
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.watch? '2px solid #3E51CC': 'none'};
    border-radius: .5rem;
    background-color:${props => props.watch? '#F7F7F7': '#3E51CC'};
    color: ${props => props.watch? '#3913B3': '#F7F7F7'};
    cursor: pointer;
    
`

const Button = ({btnText, width, height, watch}) => {

    return <Btn width={width} height={height} watch={watch} >{btnText}</Btn>
}

export default Button;