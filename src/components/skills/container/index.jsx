import { useContext } from "react"
import { Card } from "../card"
import { DivContainer } from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"
import { Expected } from "../expected"
import { Front } from "../frontend"
import { Back } from "../backend"


export const Container = () => {
    const { theme, content } = useContext(ThemeContext);

    return (
        <DivContainer shadowColor={theme.fontColorTitle}>
            <Card
                title='Essencial'
                description={<Expected icon={[content.icon.brain, content.icon.git, content.icon.gitHub, content.icon.npm, content.icon.yarn]} />}
            />

            <Card
                title='Front-End'
                description={<Front icon={[content.icon.html, content.icon.css, content.icon.javaScript, content.icon.react, content.icon.jest, content.icon.gear]} />}
            />

            <Card
                title='Back-End'
                description={<Back icon={content.icon.python} />}
            />
        </DivContainer>
    )
}