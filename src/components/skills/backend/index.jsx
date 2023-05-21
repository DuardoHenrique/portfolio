import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"
import { Content } from "../content"

export const Back = ({ icon }) => {
    const { content } = useContext(ThemeContext)

    return (
        <Content
            icon={icon}
            text={content.text.python}
            color={content.color.python}
            background={content.background.python}
        />

    )
}