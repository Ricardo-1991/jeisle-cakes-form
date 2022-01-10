import '../ResumeModal/StylesResumeModal.css'
import closeImg from '../../images/close.svg'
import Modal from 'react-modal'

export function ResumeModal({isOpen, onRequestClose, states, onHandleSubmit}) 
{
  const valueAddFillings = states.filling.reduce((acumulator,filling) => {
    const currentValueFillings = states.aditionalFilling[filling] ? states.aditionalFilling[filling][states.diameterState] : 0
    return Number(acumulator) + Number(currentValueFillings)
  }, 0)

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
      <button type='button' onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt="Botão de Fechar Modal" />
      </button>
      <div className='data-container'>
          <h1>RESUMO:</h1>
          <br />
            <h3> <i>Tamanho do Bolo</i>: {states.diameterState == null? `` : `${states.diameterState}  cm`}.</h3>

            <h3> <i>Massas</i>: {states.batterState[0] == null? states.batterState.slice(1): states.batterState.join(' e ')}.</h3>

            <h3><i>Recheios</i>: {states.filling[0] == null? states.filling.slice(1) : states.filling.join(' e ')}.</h3>

            {states.fillingAdd[0] != null && states.fillingAdd[1] != null &&
            <h3><i>Subtotal</i>: <br />

            {states.fillingAdd[0] == null? states.fillingAdd.slice(1) : `Recheios Adicionais - ${states.fillingAdd.join(' + ')}`}: { new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(valueAddFillings)}. <br /> 

            <strong>+</strong> <br />
            Valor do diâmetro do bolo: { new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(states.cakeSize[states.diameterState])}.
             </h3>  
            }
      
          <h3><u>Valor total</u>: { new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(states.total)}</h3>
          <br />
      </div>
      <button type='submit' onClick={onHandleSubmit}>Enviar Pedido</button>
    </Modal>
  )
}