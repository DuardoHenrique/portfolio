import { useContext } from "react"
import { DivCard, DivDescription, DivImage, P } from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"

export const Card = ({ print, description, icon, gridArea, position }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {position === 'left'
        ?
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

        :

        <DivCard
          gridArea={gridArea}
          background={theme.backgroundCard}
        >
          <DivDescription>
            <P
              color={theme.fontColorText}
            >
              {description}
            </P>
          </DivDescription>

          <DivImage>
            <img src={print} alt={`projeto ${gridArea}`} />

            {icon}
          </DivImage>

        </DivCard>}
    </>
  )
}