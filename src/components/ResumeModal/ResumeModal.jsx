import '../ResumeModal/StylesResumeModal.css'
import closeImg from '../../images/close.svg'
import Modal from 'react-modal'

export function ResumeModal({isOpen, onRequestClose, states, onHandleSubmit}) 
{
 
  const valueAddFillings = states.filling.reduce((acumulator,filling) => {
    const currentValueFillings = states.aditionalFilling[filling] ? states.aditionalFilling[filling][states.diameterState] : 0
    return Number(acumulator) + Number(currentValueFillings)
  }, 0)

  const date = new Date()
  const orderHour = {
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }

  function addZero (time) {
    if(time < 10){
      time = "0" + time
    }
    return time
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
      <button type='button' onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt="Botão de Fechar Modal" />
      </button>
      <div className='data-container'>
          <h1>RESUMO:</h1>
          <br />
            <h3>Nome do cliente: </h3>

            <h3>Data do pedido: {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(date)
                )}</h3>

            <h3>Horário do pedido: {`${addZero(orderHour.hour)}:${addZero(orderHour.minutes)}:${addZero(orderHour.seconds)}`}</h3>

            <h3> <i>Tamanho do Bolo</i>: {states.diameterState == null? `` : `${states.diameterState}  cm`}.</h3>

            <h3> <i>Massas</i>: {states.batterState[0] == null? states.batterState.slice(1): states.batterState.join(' e ')}.</h3>

                {states.fillingAdd[0] == null && states.fillingAdd[1] == null &&

                  <h3>{states.filling[0] == null? `Recheio: ${states.filling.slice(1)}` : `Recheios: ${states.filling.join(' e ')}`}.</h3> 
                }

                {states.fillingAdd[0] != null && states.fillingAdd[1] != null && 
                  <h3><u>Subtotal</u>:
                  
                  <h4>Recheios Adicionais - {states.fillingAdd.join(' + ')}: { new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                  }).format(valueAddFillings)}. <br />  </h4>

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