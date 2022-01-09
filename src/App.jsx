import './App.css'
import { useState } from 'react'
import { ComponentForm } from './components/Form/ComponentForm'
import { Header } from './components/Header/Header'
import { Container } from './components/UIcontainer/Container'
import {ResumeModal} from './components/ResumeModal/ResumeModal'
import Modal from 'react-modal'
import { FormContext } from './FormContext'



Modal.setAppElement('#root')
function App() {
  const [handleResumeModal, setHandleResumeModal] = useState(false)

  function handleOpenResumeModal () {
    setHandleResumeModal(true)
  }

  function handleCloseResumeModal() {
    setHandleResumeModal(false)
  }

  return (
    <FormContext.Provider value={[]}>
      <Container>
        <Header />
        <ComponentForm onOpenHandleResumeModal={handleOpenResumeModal} />
        <ResumeModal isOpen={handleResumeModal} onRequestClose={handleCloseResumeModal}/>
      </Container>
    </FormContext.Provider>
  )
}

export default App
