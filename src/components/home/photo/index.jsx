import { ConatainerPhoto, Img } from "./styles"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"
import selfie from "../../../assets/selfie.png"


export const Photo = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ConatainerPhoto>
      <Img src={selfie} alt="foto de perfil" />
    </ConatainerPhoto>
  )
}