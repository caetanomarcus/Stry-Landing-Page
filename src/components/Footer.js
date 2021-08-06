import React,{useState} from 'react';
import styled from 'styled-components';
import facebook from '../assets/Icone-Facebook.svg'
import linkedin from '../assets/Icone-Linkedin.svg'
import medium from '../assets/Icone-Medium.svg'

const Container = styled.div `
    background-color: #DFE3FA;
    display: flex;
    height: 29rem;
    justify-content: center;
    align-items: center;
`

const TextConteder = styled.div `
    width: 45%;
    max-width: 1440px;

`
const Text = styled.p `
    font-size: 1.25rem;
    color: #3E51CC;
    width: 63%;
    line-height: 1.7;


`

const InfoContender = styled.div `
    display: flex;
    height: 24rem;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1440px;

`
const Create = styled.form`
    display: flex;
    justify-content: space-between;
    width: 27.5rem ;
`

const Input = styled.input`
    width: 15.625rem;
    height: 3.5rem;
    border: 2px solid #3E51CC;
    border-radius: 8px;
    outline: none;
    font-size: 1.125rem;

    &::placeholder{
        color: #3E51CC;
        font-size: 1.125rem;
        padding-left: 1rem;
    }
`
const EmailContainer = styled.div `
    width: 27.5rem;
`

const Email = styled.p `
    font-size: 1.875rem;
    font-weight: bold;
    color: #3913B3;
`

const SocialMediaContender = styled.div `
    display: flex;
    width: 12.625rem;
    justify-content: space-between;
    align-self: flex-start;
`
const SocialMedia = styled.a `

`

const LanguagesBox = styled.div `
    display: flex;
    width: 4rem;
    justify-content: space-between;
    align-self: flex-start;
`

const Languages = styled.p `
    font-size: 1.25rem;
    color: #505050;
    font-weight: ${props => props.pt? 'bold': 'normal'};
    text-decoration: ${props => props.pt? 'underline': 'none'};
    cursor: pointer;
`
const Btn = styled.button `
    font-size: 1.125rem;
    width: 10.125rem;
    height: 3.5rem;
    border-radius: .5rem;
    background-color:#3E51CC;
    color: #F7F7F7;
    cursor: pointer;
    transition: 1s;
    border: none;

    &:hover{
        transform: scale(1.05);
    }
    
`
const Submmited = styled(Email) `
    align-self: flex-start;
`

const Footer = () => {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(false)


    const handleSubmit = (e) =>{
        e.preventDefault()
        if(email !== ''){
            setSubmitted(true)
        } else {
            setEmail('Type your email, please');
            setDisabled(true)
        }
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleFocus = () => {
        setEmail('');
        setDisabled(false)
    }

    return(
        <Container>
            <TextConteder>
                <Text>É um ambiente digital para pensar, explorar e dimensionar o conhecimento nas organizações. É um ambiente digital para pensar, explorar e dimensionar o conhecimento nas organizações. É um ambiente digital para pensar, explorar e dimensionar o conhecimento nas organizações. É um ambiente digital para pensar, explorar e dimensionar.</Text>
            </TextConteder>
            <InfoContender>
                {submitted === false?
                    <Create noValidate onSubmit={handleSubmit} >
                    <Input type='email' onFocus={handleFocus} onChange={handleChange}  value={email} placeholder='Your work email address' />
                    <Btn disabled={disabled} >Create Account</Btn>
                    </Create>
               :
               <Submmited>Your account was created!</Submmited>
                }
                <EmailContainer>
                    <Email>hey@startupin.me</Email>
                </EmailContainer>
                <SocialMediaContender>
                    <SocialMedia href='https://www.facebook.com/go.strytegy/' target="_blank" ><img src={facebook} alt='facebook icon' /></SocialMedia>
                    <SocialMedia href='https://www.instagram.com/go.strytegy/'target="_blank" ><img src={medium} alt='medium icon' /></SocialMedia>
                    <SocialMedia href='https://www.linkedin.com/company/strytegy/about/'target="_blank" ><img src={linkedin} alt='linkedin icon' /></SocialMedia>
                </SocialMediaContender>
                <LanguagesBox>
                    <Languages pt >PT</Languages>
                    <Languages>EN</Languages>
                </LanguagesBox>
            </InfoContender>
        </Container>
    )
}

export default Footer;