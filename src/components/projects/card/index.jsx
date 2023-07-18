import { useContext } from "react"
import { DivCard, DivDescription, DivImage, P } from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"

export const Card = ({ print, description, icon, gridArea }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <DivCard
          gridArea={gridArea}
          background={theme.backgroundCard}
        >
          <DivImage>
            <div>
              <img src={print} alt={`projeto ${gridArea}`} />

              {icon}
            </div>
          </DivImage>


          <DivDescription>
            <P
              color={theme.fontColorText}
            >
              {description}
            </P>
          </DivDescription>
        </DivCard>
  )
}