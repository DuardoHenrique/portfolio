import styled from "styled-components";

export const ConatainerPhoto = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 750px) {
    display: none;
    position: absolute;
  }
`

export const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`


