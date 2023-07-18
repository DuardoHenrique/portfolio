import styled from "styled-components";

export const DivImage = styled.div`
  grid-area: image;
`

export const DivDescription = styled.div`
  grid-area: description;
  padding: 10px 5px 0 5px;
` 

export const DivCard = styled.div`
    grid-area: ${({gridArea}) => gridArea};
    display: grid;
    grid: 
      'image description' / 70% 30%;

    width: 500px;
    min-height: 250px;
    background-color: white;
    border-radius: 10px;

    img {
      width: 100%;
      height: 220px;
      border-radius: 10px;
    }

    @media (max-width: 1240px) {
      grid: 
        'image'
        'description';

        width: 80%;
    }

    @media (max-width: 880px) {
      width: 60%;
    }

    @media (max-width: 600px) {
      width: 90%;
    }
    
  `

  export const P = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: ${({color}) => color};
  `