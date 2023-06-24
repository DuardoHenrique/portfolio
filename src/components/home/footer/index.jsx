import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { ContainerFooter, I } from './styles';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context'

export const Footer = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <ContainerFooter>
            <a href='https://github.com/DuardoHenrique?tab=repositories' target='_blank' rel="noreferrer">
            <I style={{color: theme.fontColorText}}><AiFillGithub /></I>
            </a>
            <a href='https://www.linkedin.com/in/eduardo-ribeiro-dev/' target='_blank' rel="noreferrer">
            <I style={{color: theme.fontColorText}}><AiFillLinkedin /></I>
            </a>
        </ContainerFooter>

    )
}
