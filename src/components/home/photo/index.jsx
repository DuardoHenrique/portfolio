import zam from "../../../assets/zam.jpg"
import zamDark from "../../../assets/zam-comprimido.jpg"
import { ConatainerPhoto, Img } from "./styles"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"


export const Photo = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ConatainerPhoto>
      <Img src={theme.img} alt="minha foto de perfil" />
    </ConatainerPhoto>
  )
}