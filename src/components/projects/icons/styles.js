import styled from "styled-components"

export const DivIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    height: 10%;
    width: 100%;
    font-size: 1.5rem;
`

export const Button = styled.button`
    width: 100px;
    font-family: 'Ubuntu', sans-serif;
    color: #72180D;
    background-color: #A2EAA6;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        color: #A2EAA6;
        background-color:  #72180D;
    }
`