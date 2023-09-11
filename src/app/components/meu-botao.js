"use client"
import styled from 'styled-components';

const Button = styled.button`
    background: #0046c0;
    color: #ffffff;
    text-align: center;
    padding: 0.8em 2em;
    margin: 1em auto;
    font-size: 1rem;
    border-radius: 10px;
    border-color: #0046c0;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    display: block;

    &:active {
        background: #01a1fd; /* Altere para a cor desejada quando o botão for clicado */
    }
`;

export default function MeuBotao({ text }) {
    return (
        <Button>
            {text}
        </Button>
    );
}
