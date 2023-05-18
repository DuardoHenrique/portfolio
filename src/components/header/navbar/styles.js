import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  font-size: 1.8rem;

  @media(max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const Li = styled.li`
  transition: .1s;
  display: ${({urlAtual, urlInitial, home}) => urlAtual === urlInitial && home ? 'none' : 'block'};
  &:hover{
    border-bottom: 2px solid rgba(161, 18, 18, 0.94);
  }

  &:not(:first-child){
    margin-left: 30px;

    @media(max-width: 480px) {
    margin-left: 20px;
  }
  }
`
