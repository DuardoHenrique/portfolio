import styled from "styled-components";

export const DivImage = styled.div`
  width: 70%;

  @media(max-width: 1240px) {
      width: 100%;
    }
`

export const DivDescription = styled.div`
  width: 30%;
  padding: 10px 5px 0 5px;

  @media(max-width: 1240px) {
      width: 100%;
    }
` 

export const DivCard = styled.div`
    grid-area: ${({gridArea}) => gridArea};
    display: flex;

    width: 500px;
    min-height: 250px;
    background-color: white;
    border-radius: 10px;

    img {
      width: 100%;
      height: 220px;
      border-radius: 10px;
    }

    @media(max-width: 1240px) {
      width: 400px;
      flex-direction: column;
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

  export const P = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: ${({color}) => color};
  `