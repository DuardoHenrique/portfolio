import { useContext } from "react";
import styled, { keyframes } from "styled-components";


const blinkBorderIcon = keyframes`
    from {
      box-shadow: 0 0 15px yellow;
    }

    to {
      box-shadow: 0 0 15px rgba(66, 24, 103, 1);
    }
  `

export const Div = styled.div`

  position: relative;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  cursor: pointer;
  /* animation: ${blinkBorderIcon} 1s linear 2s infinite alternate-reverse; */
`

export const I = styled.i`
  position: absolute;

  font-size: 17px;
  color: rgba(66, 24, 103, 1);
  margin: 1px 2px;
`

