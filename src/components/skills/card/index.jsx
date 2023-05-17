import { useContext } from "react"
import { DivCard } from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"
import { Title } from "../title"
import { Description } from "../description"

export const Card = ({ title, icon, description }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <DivCard shadowColor={theme.fontColorTitle}>
            <Title title={title} />
            <Description content={description} icon={icon}/>
        </DivCard>
    )
}