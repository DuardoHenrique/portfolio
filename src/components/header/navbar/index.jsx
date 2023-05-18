import { useContext, useState } from "react"
import { Li, Ul } from "./styles"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../../contexts/theme-context"
import { useEffect } from "react"


export const NavBar = () => {
  const [urlAtual, setUrlAtual] = useState(window.location.href)
  const [urlInitial, setUrlInitial] = useState()

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const urlInitial = window.location.href
    setUrlInitial(urlInitial)
    console.log('urlInitial',urlInitial)
  }, [])

  useEffect(() => {
    setUrlAtual(urlAtual)
    console.log('urlAtual', urlAtual)
  }, [urlAtual])

  return (

    <nav>
      <Ul onClick={() => setUrlAtual(window.location.href)}>

          <Li urlInitial={urlInitial} urlAtual={urlAtual} home >
            <Link to={'/'} style={{ color: theme.fontColorText }} >
              Inicial
            </Link>
          </Li>

          <Li urlInitial={urlInitial} urlAtual={urlAtual} >
            <Link to={'/about'} style={{ color: theme.fontColorText }} >
              Sobre
            </Link>
          </Li>

          <Li urlInitial={urlInitial} urlAtual={urlAtual} >
            <Link to={'/skills'} style={{ color: theme.fontColorText }} >
              Skills
            </Link>
          </Li>

          <Li urlInitial={urlInitial} urlAtual={urlAtual} >
            <Link to={'/projects'} style={{ color: theme.fontColorText }} >
              Projects
            </Link>
          </Li>


      </Ul>
    </nav>
  )
}