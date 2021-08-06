import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import logo from '../assets/Strytegy-Logo.svg'

const Container = styled.section `
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 100%;
    max-width: 1440px;
    height: 7rem;
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
                <Logo src={logo} />
            </LogoContainer>
            <AccountContainer>
                <LoginText href="https://go.strytegy.com/login/" target="_blank" >Log In</LoginText>
                <Button width='10.125rem' height='3.5rem' btnText='Create Account' create />
            </AccountContainer>
        </Container>
    )
}

export default Header