import styled from "styled-components";

export const DivContainer = styled.div`
    display: grid;
    grid:
      'newYork .'
      '. tracker'
      'mario .'
      '. grid'
     ;

    justify-items: center;
    padding: 20px 0;
    min-height: 87vh;
    width: 100%;

    @media (max-width: 880px) {
      grid: 
        'newYork'
        'tracker'
        'mario'
        'grid';

  
      gap: 30px;
    }
`