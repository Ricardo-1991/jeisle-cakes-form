import './App.css'
import { useState } from 'react'
import { ComponentForm } from './components/Form/ComponentForm'
import { Header } from './components/Header/Header'
import { Container } from './components/UIcontainer/Container'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function App() {
  return (
      <Container>
        <Header />
        <ComponentForm />
      </Container>
  )
}

export default App
