import styled from "styled-components";
import { ContainerFooter } from "../../home/footer/styles";

const footer = <ContainerFooter></ContainerFooter>

export const Ul = styled.ul`
  display: flex;
  font-size: 1.8rem;

  @media(max-width: 480px) {
    position: absolute;
    flex-direction: column;
    top: 13%;
    right: 0;
    font-size: 3rem;
    padding-top: 20px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 1);
    width: 100vw;
    height: 87vh;

    display: none;
  }
`

export const Li = styled.li`
  transition: .1s;
  display: ${(prop) => prop.nameUrl === 'http://localhost:3000/' && prop.c === 0 ? 'none' : 'block'};

  /* background-color: ${(prop) => console.log(prop)}; */

  &:hover{
    border-bottom: 2px solid rgba(161, 18, 18, 0.94);
  }

  &:not(:first-child){
    margin-left: 30px;

    @media(max-width: 480px) {
    margin: 0;
    margin-top: 90px;
  }
  }

  @media(max-width: 480px) {
    text-align: center;
  }

`

export const MenuHamburguer = styled.input`
  display: none;

  &:checked ~ ${Ul}  {
    display: block;
  }

  &:checked ~ ${footer}  {
    display: none;
  }
`

export const Label = styled.label`
  font-size: 35px;
  float: right;
  cursor: pointer;
  display: none;

  @media(max-width: 480px) {
    display: block;
  }
`
