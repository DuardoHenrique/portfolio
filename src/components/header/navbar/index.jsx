import { useContext, useState } from "react"
import { Label, Li, MenuHamburguer, Ul } from "./styles"
import { Link } from "react-router-dom"
import { AiOutlineMenu } from 'react-icons/ai'
import { ThemeContext } from "../../../contexts/theme-context"
import { useEffect } from "react"


export const NavBar = () => {
  const [titleNavBar] = useState(['About', 'Skills', 'Projects'])

  const [atualUrl, setAtualUrl] = useState(window.location.href)

  const { theme } = useContext(ThemeContext)

  console.log('State, ', atualUrl)


  useEffect(() => {
    console.log('UseEffect',atualUrl)
    setAtualUrl(atualUrl)
  })

  return (

    <nav>
      <MenuHamburguer type="checkbox" id="burguer" />
      <Label htmlFor="burguer" >
        <i style={{ color: theme.fontColorText }}><AiOutlineMenu /></i>
      </Label>
      <Ul onClick={() => setAtualUrl(window.location.href)}>

          <Li nameUrl={atualUrl} c={0} >
            <Link to={'/'} style={{ color: theme.fontColorText }} >
              Home
            </Link>
          </Li>

        {titleNavBar.map((title, index) => {
          return (

            <Li key={index} nameUrl={atualUrl} c={index + 1}>
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