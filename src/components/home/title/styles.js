import styled, { keyframes } from "styled-components";

const blinkCursor = keyframes`
  to {
    border-right: transparent;
  }
`

const typing = keyframes`
  from {
    width: 0;

  }

  to {
    width: 100%;
  }
`

export const H1 = styled.h1`
  font-family: 'Special Elite', cursive;

  text-transform: uppercase;
  font-size: 4.5rem;
  font-weight: 500;
  margin-bottom: 30px;
  white-space: nowrap;
  overflow: hidden;

  animation: ${typing} 2s steps(40) normal ;

  @media(max-width: 1120px) {
    white-space: normal;
  }

  @media(max-width: 480px) {
    font-size: 3.3rem;
  }
`

export const Span = styled.span`

  animation: ${blinkCursor} .5s steps(40) 1.7s infinite normal;
`

export const Div = styled.div`
  width: 100%;

  @media(max-width: 750px) {
    margin: 0 auto;
  }

`
