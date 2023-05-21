import styled from "styled-components";

export const I = styled.i`
    font-size: 1.3rem;
    color: ${({color}) => color};

    &:not(:last-child) {
        margin-right: 10px;
    }
`