import { useContext } from "react"
import { DivCard, DivParagraph, P } from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"
import { useState } from "react"

export const Card = ({ print, description, icon }) => {
  const { theme } = useContext(ThemeContext)

  const [visible, setVisible] = useState(false)

  return (
    <DivCard
      background={theme.backgroundCard}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <img src={print} alt="" />
      <DivParagraph visible={visible} >
        <P
          color={theme.fontColorText}
          visible={visible}
        >
          {description}
        </P>
      </DivParagraph>
      {icon}
    </DivCard>
  )
}