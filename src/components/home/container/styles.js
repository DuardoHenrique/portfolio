import styled from "styled-components"

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 79vh;
  padding: 0 20px;

  @media(max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;

  @media(max-width: 750px) {
    margin-left: 0;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
  }
`
