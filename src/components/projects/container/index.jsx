import { Card } from "../card"
import { IconGrid } from "../icon-grid"
import { IconMario } from "../icon-mario"
import { DivContainer } from "./styles"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"

import gridPrint from "../../../assets/grid-print.png"
import marioPrint from "../../../assets/mario-print.png"
import apiPrint from "../../../assets/new-york_du.png"
import { IconApi } from "../icon-api"

export const Container = () => {
    const { theme, content } = useContext(ThemeContext)

    return (
        <DivContainer shadow={theme.fontColorTitle}>
            <Card print={gridPrint} description={content.text.grid} icon={<IconGrid />}/>
            <Card print={marioPrint} description={content.text.mario} icon={<IconMario />} />
            <Card print={apiPrint} description={content.text.newYorkDu} icon={<IconApi />} />
        </DivContainer>
    )
}