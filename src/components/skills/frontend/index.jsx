import { useContext } from "react"
import { Content } from "../content"
import { ThemeContext } from "../../../contexts/theme-context"

export const Front = ({ icon }) => {
    const { skills } = useContext(ThemeContext)

    return (
        <>
            <Content
                icon={icon[0]}
                text={skills.text.front.html}
                color={skills.color.front.html}
                background={skills.background.front.html}
            />
            <Content
                icon={icon[1]}
                text={skills.text.front.css}
                color={skills.color.front.css}
                background={skills.background.front.css}
            />
            <Content
                icon={icon[2]}
                text={skills.text.front.javaScript}
                color={skills.color.front.javaScript}
                background={skills.background.front.javaScript}
            />
            <Content
                icon={icon[3]}
                text={skills.text.front.react}
                color={skills.color.front.react}
                background={skills.background.front.react}
            />
            <Content
                icon={icon[4]}
                text={skills.text.front.jest}
                color={skills.color.front.jest}
                background={skills.background.front.jest}
            />
            <Content
                icon={icon[5]}
                text={skills.text.front.api}
                color={skills.color.front.api}
                background={skills.background.front.api}
            />
        </>
    )
}