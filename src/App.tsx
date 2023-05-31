import { Container } from './components/Container'
import { NavBar } from './components/Navbar'
import { Footer } from './components/footer'
import RoutesConfig from './routes'

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <RoutesConfig />
      </Container>
      <Footer />
    </>
  )
}

export default App
