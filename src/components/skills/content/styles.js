import styled from "styled-components";

export const I = styled.i`
    font-size: 2rem;
    color: ${({color}) => color};
`
export const P = styled.p`
    color: ${({color}) => color};
    font-size: 1.2rem;
    font-weight: 400;
`

export const DivContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 0 20px;
    background: ${({background}) => background};
    height: 45px;
    width: 90%;
    cursor: help;

    &:not(:last-child){
        margin-bottom: 30px;
    }


`

export const DivIcon = styled.div`
    display: flex;
    flex-direction: column;

`