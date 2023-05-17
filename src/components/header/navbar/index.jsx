import { useContext, useState } from "react"
import { Label, Li, MenuHamburguer, Ul } from "./styles"
import { Link } from "react-router-dom"
import { AiOutlineMenu } from 'react-icons/ai'
import { ThemeContext } from "../../../contexts/theme-context"
import { useEffect } from "react"


export const NavBar = () => {
  const [titleNavBar] = useState(['About', 'Skills', 'Projects'])
  const [urlAtual, setUrlAtual] = useState(window.location.href)
  const [urlInitial, setUrlInitial] = useState()

  const { theme } = useContext(ThemeContext)


  useEffect(() => {
    const urlInitial = window.location.href
    setUrlInitial(urlInitial)
  }, [])

  useEffect(() => {
    setUrlAtual(urlAtual)
  }, [urlAtual])

  return (

    <nav>
      <MenuHamburguer type="checkbox" id="burguer" />
      <Label htmlFor="burguer" >
        <i style={{ color: theme.fontColorText }}><AiOutlineMenu /></i>
      </Label>
      <Ul onClick={() => setUrlAtual(window.location.href)}>

          <Li urlInitial={urlInitial} urlAtual={urlAtual} home >
            <Link to={'/'} style={{ color: theme.fontColorText }} >
              Home
            </Link>
          </Li>

        {titleNavBar.map((title, index) => {
          return (

            <Li key={index} urlAtual={urlAtual} >
              <Link to={title.toLocaleLowerCase()} style={{ color: theme.fontColorText }}>
                {title}
              </Link>
            </Li>

          )
        })}
      </Ul>
    </nav>
  )
}