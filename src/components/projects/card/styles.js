import styled from "styled-components";

export const DivCard = styled.div`
    width: 390px;
    min-height: 250px;
    margin: 10px 50px;
    padding-bottom: 5px;
    background-color: white;

    img {
      width: 100%;
      height: 220px;
    }

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

export const DivParagraph = styled.div`
  padding: ${({visible}) => visible === false ? '0' : '7px'};
`

export const P = styled.p`
  display: ${({visible}) => visible === false ? 'none' : 'block'};

  font-size: 1.3rem;
  font-weight: 400;
  color: ${({color}) => color};
`