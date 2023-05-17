import { Container } from "../../components/home/container"
import { Footer }  from "../../components/home/footer"

export const Home = () => {
  const nameUrl = window.location.href

  

  return (
    <>
      <section >
        <Container />
        <Footer />
      </section>
    </>

  )
}
