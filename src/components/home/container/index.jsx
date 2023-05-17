import { Photo } from "../photo"
import { Apresentation } from "../presentation"
import { Title } from "../title"
import { Main, Section } from './styles'

export const Container = () => {
  return (
    <Main>
      <Photo />
      <Section>
        <Title />
        <Apresentation />
      </Section>
    </Main>
  )
}