import React, {useState} from 'react';
import styled from 'styled-components';

const Container =styled.div `
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h2 `
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #2F2F2F;
    margin: 0 auto;
    max-width: 1440px;
    align-self: flex-start;
    height: 8rem;
    
`
const Contender = styled.div `
    width: 75%;
    max-width: 1440px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10rem;


`
const Item = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${props => props.active? '6rem': '3rem'};
    margin: ${props => props.active? '2rem': '.5rem'} 0;
   

`
const ShowedItem = styled.div `
    display: flex;
    align-items: center;
 

`

const ItemBtn = styled.p `
    color: #49C5E3;
    font-size: 2.125rem;
    margin-right: 1rem;
    cursor: pointer;
    
`

const ItemTitle = styled.h3 `
    font-size: ${props => props.active? '2.125rem': '1.5rem'};
    color: ${props => props.active?'#3E51CC' :'#2F2F2F'};
    font-weight: ${props => props.active? 'bold': 'normal'};
    cursor: pointer;
`

const ItemText = styled.p `
    font-weight: 300;
    font-size: 1.25rem;
    width: 93%;
    color: #505050;
    margin-left: 1.5rem;
`

const SecondTitle = styled.h2 `
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #2F2F2F;
    margin: 0 auto;
    max-width: 1440px;
    margin-bottom: 5rem;
    margin-top: 5rem;
    
`



const Faq = () => {
    const [text] = useState('Texto que responde a pergunta clicada pelo usuário. Segunda linha do parágrafo explicativo para esta pergunta da lista de perguntas feitas frequentemente.')
    const [items, setItems] = useState([
        {   btn: '+',
            title: 'Using our Tools, Canvases & Methods',
            text,
            isActive: false
        },
        {   btn: '+',
            title: 'How to get started?',
            text,
            isActive: false
        },
        {   btn: '+',
            title: 'We got tips for you here!',
            text,
            isActive: false
        },
        {   btn: '+',
            title: 'Wich canvas template should I choose?',
            text,
            isActive: false
        },
        {   btn: '+',
            title: 'How do I use the 9 building blocks on the canvas model to find my business model?',
            text,
            isActive: false
        },
    ]);

    const handleItem = (item) =>{

        if(!item.isActive){
            item.isActive = true
            item.btn = '-'
        setItems([
            ...items
        ])
        } else {
            item.isActive = false
            item.btn = '+'
        setItems([
            ...items
        ])
        }

        console.log(items)

    }

    return(
        <Container>
            <Title>FAQ</Title>
            <Contender>
               {items.map((item, index) => {
                   return (
                    <Item active={item.isActive} key={index} >
                    <ShowedItem>
                        <ItemBtn onClick={()=>handleItem(item)} >{item.btn}   </ItemBtn>
                        <ItemTitle active={item.isActive} >{item.title}</ItemTitle>
                    </ShowedItem>
                    {item.isActive? <ItemText active={item.isActive} >{item.text}</ItemText> : null}
                </Item>
                   )
               })}
            </Contender>
            <SecondTitle>Try your strategy with Strytegy</SecondTitle>
        </Container>
    )
}

export default Faq;