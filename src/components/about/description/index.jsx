import { useContext } from "react"
import { SectionAbout } from "../sectionAbout/styles"
import { Container, H2, P, Span } from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"

export const Description = () => {
    const { theme } = useContext(ThemeContext)

    return (
            <Container shadowColor={theme.fontColorTitle}>
                <H2 title={theme.fontColorTitle}>Saudações,</H2>

                <P paragraph={theme.fontColorText}>
                    <Span bold firstLetter={theme.fontColorTitle}>S</Span><Span>o</Span><Span>u</Span> <Span>o</Span> <Span>E</Span><Span>d</Span><Span>u</Span><Span>a</Span><Span>r</Span><Span>d</Span><Span>o</Span> <Span>H</Span><Span>e</Span><Span>n</Span><Span>r</Span><Span>i</Span><Span>q</Span><Span>u</Span><Span>e</Span> <Span>d</Span><Span>e</Span> <Span>S</Span><Span>o</Span><Span>u</Span><Span>z</Span><Span>a</Span> <Span>R</Span><Span>i</Span><Span>b</Span><Span>e</Span><Span>i</Span><Span>r</Span><Span>o</Span>
                </P>

                <P paragraph={theme.fontColorText} firstLetter={theme.fontColorTitle}>
                    <Span bold firstLetter={theme.fontColorTitle}>S</Span><Span>e</Span><Span>m</Span><Span>p</Span><Span>r</Span><Span>e</Span> <Span>g</Span><Span>o</Span><Span>s</Span><Span>t</Span><Span>e</Span><Span>i</Span> <Span>d</Span><Span>a</Span><Span>s</Span> <Span>c</Span><Span>i</Span><Span>ê</Span><Span>n</Span><Span>c</Span><Span>i</Span><Span>a</Span><Span>s</Span> <Span>q</Span><Span>u</Span><Span>e</Span> <Span>e</Span><Span>s</Span><Span>s</Span><Span>e</Span> <Span>m</Span><Span>u</Span><Span>n</Span><Span>d</Span><Span>o</Span> <Span>n</Span><Span>o</Span><Span>s</Span> <Span>p</Span><Span>r</Span><Span>o</Span><Span>p</Span><Span>o</Span><Span>r</Span><Span>c</Span><Span>i</Span><Span>o</Span><Span>n</Span><Span>a</Span>
                </P>

                <P paragraph={theme.fontColorText}>
                    <Span bold firstLetter={theme.fontColorTitle}>S</Span><Span>o</Span><Span>b</Span><Span>r</Span><Span>e</Span> <Span>t</Span><Span>u</Span><Span>d</Span><Span>o</Span><Span>,</Span> <Span>a</Span><Span>d</Span><Span>m</Span><Span>i</Span><Span>t</Span><Span>o</Span><Span>,</Span> <Span>a</Span> <Span>t</Span><Span>e</Span><Span>c</Span><Span>n</Span><Span>o</Span><Span>l</Span><Span>o</Span><Span>g</Span><Span>i</Span><Span>a</Span> <Span>a</Span><Span>d</Span><Span>m</Span><Span>i</Span><Span>r</Span><Span>o</Span>
                </P>

                <P paragraph={theme.fontColorText}>
                    <Span bold firstLetter={theme.fontColorTitle}>S</Span><Span>e</Span><Span>m</Span> <Span>q</Span><Span>u</Span><Span>a</Span><Span>l</Span><Span>q</Span><Span>u</Span><Span>e</Span><Span>r</Span> <Span>i</Span><Span>n</Span><Span>c</Span><Span>e</Span><Span>n</Span><Span>t</Span><Span>e</Span><Span>z</Span><Span>a</Span> <Span>d</Span><Span>e</Span> <Span>q</Span><Span>u</Span><Span>e</Span> <Span>e</Span><Span>l</Span><Span>a</Span> <Span>r</Span><Span>e</Span><Span>g</Span><Span>e</Span> <Span>a</Span><Span>s</Span> <Span>r</Span><Span>é</Span><Span>d</Span><Span>e</Span><Span>a</Span><Span>s</Span> <Span>d</Span><Span>e</Span><Span>s</Span><Span>s</Span><Span>e</Span> <Span>m</Span><Span>u</Span><Span>n</Span><Span>d</Span><Span>o</Span>
                </P>

                <P paragraph={theme.fontColorText}>
                    <Span bold firstLetter={theme.fontColorTitle}>S</Span><Span>e</Span><Span>n</Span><Span>d</Span><Span>o</Span> <Span>a</Span><Span>s</Span><Span>s</Span><Span>i</Span><Span>m</Span><Span>,</Span> <Span>b</Span><Span>u</Span><Span>s</Span><Span>c</Span><Span>o</Span> <Span>u</Span><Span>m</Span><Span>a</Span> <Span>o</Span><Span>p</Span><Span>o</Span><Span>r</Span><Span>t</Span><Span>u</Span><Span>n</Span><Span>i</Span><Span>d</Span><Span>a</Span><Span>d</Span><Span>e</Span> <Span>d</Span><Span>e</Span> <Span>c</Span><Span>o</Span><Span>m</Span> <Span>e</Span><Span>l</Span><Span>a</Span> <Span>t</Span><Span>r</Span><Span>a</Span><Span>b</Span><Span>a</Span><Span>l</Span><Span>h</Span><Span>a</Span><Span>r</Span><Span>,</Span> <Span>c</Span><Span>o</Span><Span>m</Span> <Span>o</Span>
                </P>

                <P paragraph={theme.fontColorText}>
                    <Span bold firstLetter={theme.fontColorTitle}>S</Span><Span>o</Span><Span>n</Span><Span>h</Span><Span>o</Span> <Span>d</Span><Span>e</Span> <Span>m</Span><Span>e</Span> <Span>s</Span><Span>u</Span><Span>s</Span><Span>t</Span><Span>e</Span><Span>n</Span><Span>t</Span><Span>a</Span><Span>r</Span> <Span>c</Span><Span>o</Span><Span>m</Span> <Span>a</Span><Span>l</Span><Span>g</Span><Span>o</Span> <Span>a</Span><Span>o</Span> <Span>q</Span><Span>u</Span><Span>a</Span><Span>l</Span> <Span>t</Span><Span>e</Span><Span>n</Span><Span>h</Span><Span>o</Span> <Span>a</Span><Span>p</Span><Span>r</Span><Span>e</Span><Span>ç</Span><Span>o</Span>
                </P>

                <P paragraph={theme.fontColorText}>
                    <Span bold firstLetter={theme.fontColorTitle}>S</Span><Span>a</Span><Span>b</Span><Span>e</Span><Span>n</Span><Span>d</Span><Span>o</Span> <Span>q</Span><Span>u</Span><Span>e</Span> <Span>t</Span><Span>e</Span><Span>r</Span><Span>e</Span><Span>i</Span> <Span>d</Span><Span>e</Span> <Span>m</Span><Span>e</Span> <Span>e</Span><Span>s</Span><Span>f</Span><Span>o</Span><Span>r</Span><Span>ç</Span><Span>a</Span><Span>r</Span> <Span>a</Span><Span>o</Span> <Span>m</Span><Span>á</Span><Span>x</Span><Span>i</Span><Span>m</Span><Span>o</Span> <Span>p</Span><Span>a</Span><Span>r</Span><Span>a</Span>
                </P>

                <P paragraph={theme.fontColorText}>
                    <Span bold firstLetter={theme.fontColorTitle}>S</Span><Span>a</Span><Span>b</Span><Span>o</Span><Span>r</Span><Span>e</Span><Span>a</Span><Span>r</Span> <Span>o</Span><Span>s</Span> <Span>f</Span><Span>r</Span><Span>u</Span><Span>t</Span><Span>o</Span><Span>s</Span> <Span>q</Span><Span>u</Span><Span>e</Span> <Span>s</Span><Span>e</Span><Span>m</Span><Span>e</Span><Span>a</Span><Span>r</Span><Span>e</Span><Span>i</Span>
                </P>

                <P paragraph={theme.fontColorText}>
                    <Span bold firstLetter={theme.fontColorTitle}>S</Span><Span>o</Span><Span>b</Span> <Span>e</Span><Span>s</Span><Span>s</Span><Span>e</Span> <Span>s</Span><Span>o</Span><Span>l</Span><Span>o</Span> <Span>i</Span><Span>n</Span><Span>c</Span><Span>e</Span><Span>r</Span><Span>t</Span><Span>o</Span><Span>,</Span> <Span>p</Span><Span>o</Span><Span>r</Span><Span>é</Span><Span>m</Span>
                </P>

                <P paragraph={theme.fontColorText}  >
                    <Span bold firstLetter={theme.fontColorTitle}>S</Span><Span>u</Span><Span>r</Span><Span>p</Span><Span>r</Span><Span>e</Span><Span>e</Span><Span>n</Span><Span>d</Span><Span>e</Span><Span>n</Span><Span>t</Span><Span>e</Span><Span>.</Span>
                </P>
            </Container>
    )
}