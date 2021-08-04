import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import logo from '../assets/Strytegy-Logo.svg'

const Container = styled.section `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    height: 10rem;
    margin: auto;
`

const LogoContainer = styled.section `
    width: 40%;
    display: flex;
    align-items: center;

    p{
        font-size: 1.6rem;
        color: #2F2F2F;
        font-weight: bold;
    }
`
const Logo = styled.img `
    
`

const AccountContainer = styled.section `
    display: flex;
    width: 40%;
    justify-content: flex-end;
    align-items: center;
`

const LoginText = styled.a `
    font-size: 1.125rem;
    color: #3913B3;
    margin-right: 2rem;
    text-decoration: none;
`

const Header = () => {
    return (
        <Container>
            <LogoContainer>
               <a href='#'> <Logo src={logo} /></a>
            </LogoContainer>
            <AccountContainer>
                <LoginText href="#" >Log In</LoginText>
                <Button width='10.125rem' height='3.5rem' btnText='Create Account' />
            </AccountContainer>
        </Container>
    )
}

export default Header