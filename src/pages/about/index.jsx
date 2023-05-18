import { useParams } from "react-router-dom"
import { Description } from "../../components/about/description"
import { SectionAbout } from "../../components/about/sectionAbout"

export const About = () => { 
    let { id } = useParams();

    return (
        <SectionAbout>
            <Description />
        </SectionAbout>
    )
}
