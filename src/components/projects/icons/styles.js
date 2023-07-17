import styled from "styled-components"

export const DivIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10%;
    width: 100%;
    margin-top: 5px;
    font-size: 1.5rem;
`

export const Button = styled.button`
    width: 100px;
    font-family: 'Ubuntu', sans-serif;
    background-color: ${({background}) => background};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: ${({color}) => color};
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
`