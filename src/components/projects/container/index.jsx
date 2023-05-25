import { Card } from "../card"
import { IconGrid } from "../icon-grid"
import { IconMario } from "../icon-mario"
import { DivContainer } from "./styles"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"

import gridPrint from "../../../assets/grid-print.png"
import gridAnimation from "../../../assets/grid-animation.gif"
import marioPrint from "../../../assets/mario-print.png"
import marioAnimation from "../../../assets/mario-animation.gif"
import apiPrint from "../../../assets/api-new-work-times.png"
import apiAnimation from "../../../assets/api-animation.gif"
import { IconApi } from "../icon-api"

export const Container = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <DivContainer shadow={theme.fontColorTitle}>
            <Card print={gridPrint} gif={gridAnimation} icon={<IconGrid />}/>
            <Card print={marioPrint} gif={marioAnimation} icon={<IconMario />} />
            <Card print={apiPrint} gif={apiAnimation} icon={<IconApi />} />
        </DivContainer>
    )
}