import styled from "styled-components";

export const H2 = styled.h2`
    font-family: 'Special Elite', cursive;
    font-weight: 500;
    color: ${({title}) => title};
    font-size: 5rem;
    margin-bottom: 10px;

    @media(max-width: 1200px) {
        font-size: 3rem;
}
`

export const Span = styled.span`
    font-weight: ${({ bold }) => bold ? 500 : 300};
    font-size: ${({ bold }) => bold ? '3rem' : '2.7rem'};
   color: ${({firstLetter}) => firstLetter};
    display: inline-block;
    cursor: default;
    transition: .1s;


    &:hover {
        transform: translateY(-10px);
    }

    @media(max-width: 1200px) {
        font-size: ${({ bold }) => bold ? '2.2rem' : '1.8rem'}; ;
}
`

export const P = styled.p`
    margin-left: 25px;
    word-spacing: 4px;
    color: ${({paragraph}) => paragraph};
    cursor: default;

    &:not(:last-child) {
        margin-bottom: 6px;
    }

    @media(max-width: 480px) {
        margin-left: 0;
    }
`
// 0 0 10px black
export const Container = styled.div`
    padding: 5px 10px 0 10px;
    height: min-content;
    width: 75%;
    border-radius: 10px;
    box-shadow: ${({shadowColor}) => `0 0 10px ${shadowColor}`};

    @media(max-width: 1200px) {
        width: 70%;
    }

    @media(max-width: 860px) {
        width: 80%;
    }

    @media(max-width: 480px) {
        width: 95%;
    }
`