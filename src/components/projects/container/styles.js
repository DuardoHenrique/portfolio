import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    min-height: 87vh;
    width: 95%;
    padding: 10px 0;
    box-shadow: ${({shadow}) => `0 0 4px ${shadow}`};
`