import { useContext } from "react"
import { Button, DivChildren, DivIcons } from "./styles"
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

      <DivChildren>
        {children}
      </DivChildren>

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