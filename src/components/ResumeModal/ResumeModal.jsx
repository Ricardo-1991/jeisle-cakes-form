import '../ResumeModal/StylesResumeModal.css'
import closeImg from '../../images/close.svg'
import Modal from 'react-modal'

export function ResumeModal({isOpen, onRequestClose}) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
      <button type='button' onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt="Botão de Fechar Modal" />
      </button>
      <div>
          <h1>RESUMO:</h1>
          <br />
          <h3>Tamanho do Bolo:</h3>
          <h3>Massas:</h3>
          <h3>Recheios:</h3>
          <br />

          <h3>Valor Total:</h3>
          <br />
      </div>
      <button type='submit'>Enviar Pedido</button>
    </Modal>
  )
}