import styled from "styled-components";

export const DivCard = styled.div`
    width: 390px;
    height: 250px;
    margin: 10px;

    @media(max-width: 880px) {
        height: 380px;
        width: 490px;
        margin-inline: 30px;
    }

    @media(max-width: 480px) {
        max-width: 280px;
        height: 300px;
    }
`