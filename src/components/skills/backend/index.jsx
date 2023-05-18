import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"
import { Content } from "../content"

export const Back = ({ icon }) => {
    const { skills } = useContext(ThemeContext)

    return (
        <Content
            icon={icon}
            text={skills.text.back.python}
            color={skills.color.back.python}
            background={skills.background.back.python}
        />

    )
}