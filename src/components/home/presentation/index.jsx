import { useContext } from "react"
import { Div} from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"

export const Apresentation = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Div style={{color: theme.fontColorText}}>
      <p>Olá,</p>
      <p>Sou o Edu,tenho 20 anos</p>
      <p>E busco uma opurtunidade na área de programação como desenvolvedor web</p>
    </Div>
  )
}
