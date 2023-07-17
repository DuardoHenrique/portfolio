import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 10px;
    min-height: 87vh;
    width: 90%;

    @media(max-width: 500px) {
        box-shadow: 0 0 0 0;
    }
`