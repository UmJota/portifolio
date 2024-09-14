import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Project from './containers/Project'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Project />
        </main>
      </Container>
    </>
  )
}

export default App
