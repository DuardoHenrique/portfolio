import { useContext } from "react"
import { Div, H1, Span } from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"

export const Title = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <Div style={{color: theme.fontColorTitle}}>
      <H1>Desenvolvedor FrontEnd<Span style={{borderRight: `2px solid ${theme.fontColorTitle}`}} /></H1>
    </Div>
  )
}