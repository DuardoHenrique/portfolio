import styled from "styled-components";

export const ContainerFooter = styled.footer`
    height: 8vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 30px;

    @media(max-width: 750px) {
        justify-content: center;
  }
`

export const I = styled.i`
    font-size: 3rem;
    margin-left: 30px;
    opacity: 0.5;
    transition: .3s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`


