import { ThemeProvider } from 'styled-components'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import GlobalStyle, { Container } from './styles'
import Projects from './containers/Projects'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoDarkTheme, setEstaUsandoDarkTheme] = useState(false)

  function trocaTheme() {
    setEstaUsandoDarkTheme(!estaUsandoDarkTheme)
  }

  return (
    <ThemeProvider theme={estaUsandoDarkTheme ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar trocaTheme={trocaTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
