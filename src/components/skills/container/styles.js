import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 10px;
    padding: 20px 10px;
    min-height: 87vh;
    width: 90%;
    box-shadow: ${({ shadowColor }) => `0 0 10px ${shadowColor}`};;

    @media(max-width: 500px) {
        box-shadow: 0 0 0 0;
    }
`