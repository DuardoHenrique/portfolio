import { useContext } from "react"
import { DivTitle, H2 } from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"


export const Title = ({ title }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <DivTitle>
            <H2 color={theme.fontColorTitle}>{title}</H2>
        </DivTitle>
    )
}