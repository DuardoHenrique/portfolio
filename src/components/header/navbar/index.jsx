import { useContext } from "react"
import { Li, Ul } from "./styles"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../../contexts/theme-context"

export const NavBar = () => {
  const { theme } = useContext(ThemeContext)

  return (

    <nav>
      <Ul>

          <Li >
            <Link to={'/'} style={{ color: theme.fontColorText }} >
              Inicial
            </Link>
          </Li>

          <Li>
            <Link to={'/about'} style={{ color: theme.fontColorText }} >
              Sobre
            </Link>
          </Li>

          <Li >
            <Link to={'/skills'} style={{ color: theme.fontColorText }} >
              Habilidades
            </Link>
          </Li>

          <Li>
            <Link to={'/projects'} style={{ color: theme.fontColorText }} >
              Projetos
            </Link>
          </Li>


      </Ul>
    </nav>
  )
}