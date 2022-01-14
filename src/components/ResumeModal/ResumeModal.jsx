import '../ResumeModal/StylesResumeModal.css'
import closeImg from '../../images/close.svg'
import Modal from 'react-modal'

export function ResumeModal({
  isOpen,
  onRequestClose,
  states,
  onHandleSubmit
}) {
  const valueAddFillings = states.filling.reduce((acumulator, filling) => {
    const currentValueFillings = states.aditionalFilling[filling]
      ? states.aditionalFilling[filling][states.diameterState]
      : 0
    return Number(acumulator) + Number(currentValueFillings)
  }, 0)

  const date = new Date()
  const orderHour = {
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }

  function addZero(time) {
    if (time < 10) {
      time = '0' + time
    }
    return time
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Botão de Fechar Modal" />
      </button>
      <div className="data-container">
        <h1>RESUMO DO PEDIDO:</h1>
        <br />
        <h3>Nome do cliente: {states.name} </h3>
        <h3>
          Data do pedido:
          {` ${new Intl.DateTimeFormat('pt-BR').format(new Date(date))}`}
        </h3>
        <h3>
          Horário do pedido:
          {` ${addZero(orderHour.hour)}:${addZero(orderHour.minutes)}:${addZero(
            orderHour.seconds
          )}`}
        </h3>
        <h3>
          <i>Tamanho do Bolo</i>:
          {states.diameterState == null ? `` : ` ${states.diameterState}cm`}.
        </h3>
        <h3>
          <i>Massas</i>:
          {states.batterState[0] == null
            ? ` ${states.batterState.slice(1)}`
            : ` ${states.batterState.join(' e ')}`}
          .
        </h3>
        {/* {Lógica marcado 2 de um ou de outro} */}
        {states.filteredAdd[0] == null && states.filteredAdd[1] == null && (
          <>
            <h3>
              {states.filteredNormal[0] == null
                ? `Recheio normal: ${states.filteredNormal.slice(1)}`
                : `Recheios Normais: ${states.filteredNormal.join(' e ')}`}
            </h3>
          </>
        )}

        {states.filteredNormal[0] == null && states.filteredNormal[1] == null && (
          <>
            <h3>
              {states.filteredAdd[0] == null
                ? `Recheio adicional: ${states.filteredAdd.slice(1)}`
                : `Recheios Adicionais: ${states.filteredAdd.join(' e ')}`}
            </h3>
          </>
        )}

        {/* {Lógica marcado um de cada ao contrário} */}
        {states.filteredNormal[1] == null && states.filteredAdd[0] == null && (
          <>
            {states.filteredNormal[0] && (
              <h3>Recheio Normal: {states.filteredNormal.slice(0)}</h3>
            )}
            {states.filteredAdd[1] && (
              <h3>Recheio Adicional: {states.filteredAdd.slice(1)}</h3>
            )}
          </>
        )}
        {states.filteredNormal[0] == null && states.filteredAdd[1] == null && (
          <>
            {states.filteredNormal[1] && (
              <h3>Recheio normal: {states.filteredNormal.slice(1)}</h3>
            )}
            {states.filteredAdd[0] && (
              <h3>Recheio Adicional: {states.filteredAdd.slice(0)}</h3>
            )}
          </>
        )}
        <h3>
          <u>Valor total</u>:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(states.total)}
        </h3>
      </div>
      <button type="submit" onClick={onHandleSubmit}>
        Enviar Pedido
      </button>
    </Modal>
  )
}
