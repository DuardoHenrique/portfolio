import styled from "styled-components";

export const HeaderFlex = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 30px 50px;
  height: 13vh;

  @media(max-width: 480px) {
    justify-content: center;
    padding: 50px 10px;
  }
`
