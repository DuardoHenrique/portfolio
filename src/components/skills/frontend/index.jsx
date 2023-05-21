import { useContext } from "react"
import { Content } from "../content"
import { ThemeContext } from "../../../contexts/theme-context"

export const Front = ({ icon }) => {
    const { content } = useContext(ThemeContext)

    return (
        <>
            <Content
                icon={icon[0]}
                text={content.text.html}
                color={content.color.html}
                background={content.background.html}
            />
            <Content
                icon={icon[1]}
                text={content.text.css}
                color={content.color.css}
                background={content.background.css}
            />
            <Content
                icon={icon[2]}
                text={content.text.javaScript}
                color={content.color.javaScript}
                background={content.background.javaScript}
            />
            <Content
                icon={icon[3]}
                text={content.text.react}
                color={content.color.react}
                background={content.background.react}
            />
            <Content
                icon={icon[4]}
                text={content.text.jest}
                color={content.color.jest}
                background={content.background.jest}
            />
            <Content
                icon={icon[5]}
                text={content.text.api}
                color={content.color.api}
                background={content.background.api}
            />
        </>
    )
}