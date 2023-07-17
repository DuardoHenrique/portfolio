import { useContext } from "react"
import { Button, DivIcons } from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"

export const Icons = ({ children, hrefDeploy, hrefRepo }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <DivIcons>
      <a
        href={hrefRepo}
        target="_blank"
        rel="noreferrer"

      >
        <Button
          background={theme.backgroundCard}
          color={theme.fontColorText}
        >
          Repositório
        </Button>
      </a>

      <div>
        {children}
      </div>

      <a
        href={hrefDeploy}
        target="_blank"
        rel="noreferrer">
        <Button
          background={theme.backgroundCard}
          color={theme.fontColorText}
        >
          Deploy
        </Button>
      </a>
    </DivIcons>

  )
}