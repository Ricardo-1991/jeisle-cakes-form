import './App.css'
import { ComponentForm } from './components/Form/ComponentForm'
import { Header } from './components/Header/Header'
import { Container } from './components/UIcontainer/Container'

function App() {
  return (
    <Container>
      <Header />
      <ComponentForm />
    </Container>
  )
}

export default App
