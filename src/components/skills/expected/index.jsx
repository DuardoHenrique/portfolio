import { useContext } from "react"
import { Content } from "../content"
import { ThemeContext } from "../../../contexts/theme-context"

export const Expected = ({ icon }) => {
    const { content } = useContext(ThemeContext)

    return (
        <>
            <Content
                icon={icon[0]}
                text={content.text.brain}
                color={content.color.brain}
                background={content.background.brain}
            />

            <Content
                icon={icon[1]}
                text={content.text.git}
                color={content.color.git}
                background={content.background.git}
            />

            <Content
                icon={icon[2]}
                text={content.text.gitHub}
                color={content.color.gitHub}
                background={content.background.gitHub}
            />

            <Content
                icon={icon[3]}
                iconAdditional={icon[4]}
                text={content.text.npmAndYarn}
                color={content.color.npm}
                colorAdditional={content.color.yarn}
                background={content.background.npmAndYarn}
            />
        </>
    )
}