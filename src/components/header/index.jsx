import { NavBar } from "./navbar"
import { IconTogglerTheme } from "./icon-toggler-theme"

import { HeaderFlex } from "./styles"

export const Header = () => {
  return (
    <HeaderFlex>
      <IconTogglerTheme />
      <NavBar />
    </HeaderFlex>
  )
}
