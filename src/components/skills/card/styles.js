import styled from "styled-components";

export const DivCard = styled.div`

    width: 300px;
    height: 74vh;
    border-radius: 10px;
    margin: 20px;


    /* box-shadow: ${({ shadowColor }) => `0 0 10px ${shadowColor}`}; */
    background-color: ${({background}) => background};
`
// rgba(207, 46, 159, 1)
// #040B7E