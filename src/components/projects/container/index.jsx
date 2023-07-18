import { Card } from "../card"
import { IconGrid } from "../icon-grid"
import { IconMario } from "../icon-mario"
import { IconApi } from "../icon-york-du"
import { DivContainer } from "./styles"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"

import gridPrint from "../../../assets/grid-print.png"
import marioPrint from "../../../assets/mario-print.png"
import newYorkDuPrint from "../../../assets/new-york_du.png"
import trackerPrint from "../../../assets/tracker-print.png"
import { IconTracker } from "../icon-tracker"


export const Container = () => {
  const { theme, content } = useContext(ThemeContext)

  return (
    <DivContainer shadow={theme.fontColorTitle}>
      <Card
        print={newYorkDuPrint}
        description={content.text.newYorkDu}
        icon={<IconApi />}
        gridArea='newYork'
      />

      <Card
        print={trackerPrint}
        description={content.text.tracker}
        icon={<IconTracker />}
        gridArea='tracker'
      />

      <Card
        print={marioPrint}
        description={content.text.mario}
        icon={<IconMario />}
        gridArea='mario'
      />

      <Card
        print={gridPrint}
        description={content.text.grid}
        icon={<IconGrid />}
        gridArea='grid'
      />
    </DivContainer>
  )
}