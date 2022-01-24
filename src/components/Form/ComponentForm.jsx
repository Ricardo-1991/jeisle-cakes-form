import React, { useState, useRef } from 'react'
import '../Form/FormStyle.css'
import avatar from '../../images/avatar-jeisle.jpeg'
import balaoMenu from '../../images/balao-menu.png'
import { BsFileArrowDown } from 'react-icons/bs'
import { ResumeModal } from '../ResumeModal/ResumeModal'
import { PriceTableModal } from '../PriceTableModal/PriceTableModal'
import { RenderGlitter } from '../RenderGlitter/RenderGlitter'

const cakeSize = {
  15: 110,
  20: 160,
  25: 220,
  30: 280
}

const aditionalFilling = {
  Abacaxi: {
    15: 8,
    20: 10,
    25: 14,
    30: 16
  },

  Ameixa: {
    15: 8,
    20: 10,
    25: 14,
    30: 16
  },

  'Limão Siciliano': {
    15: 5,
    20: 8,
    25: 10,
    30: 12
  },

  Maracujá: {
    15: 5,
    20: 8,
    25: 10,
    30: 12
  },

  Morango: {
    15: 8,
    20: 16,
    25: 24,
    30: 32
  },

  Nozes: {
    15: 7,
    20: 14,
    25: 21,
    30: 28
  },

  Ovomaltine: {
    15: 7,
    20: 14,
    25: 21,
    30: 28
  },

  Oreo: {
    15: 8,
    20: 16,
    25: 24,
    30: 32
  }
}

export function ComponentForm() {
  const inputName = useRef(false)
  const inputDate = useRef(false)
  const inputTime = useRef(false)
  const inputDiameter = useRef(false)
  const inputBatter = useRef(false)
  const inputFilling = useRef(false)

  const [dateForeCast, setDateForecast] = useState(new Date())

  console.log(dateForeCast)

  const [name, setName] = useState('')
  const [theme, setTheme] = useState('')
  const [textArea, setTextArea] = useState('')
  const [top, setTop] = useState()
  const [payment, setPayment] = useState()
  const [time, setTime] = useState(null)

  const [diameterState, setDiameter] = useState(null)
  const [batterState, setBatterState] = useState([null, null])
  const [filling, setFilling] = useState([])
  const [addFilling, setAddFilling] = useState([])

  const [handleResumeModal, setHandleResumeModal] = useState(false)
  const [handlePriceTableModal, setHandlePriceTableModal] = useState(false)

  const [priceGlitter, setPriceGlitter] = useState(null)

  // Modal Resumo Pedido
  function handleOpenResumeModal() {
    if (name == '') {
      alert('Digite o seu nome antes de prosseguir.')
      inputDiameter.current.focus()
      return false
    } else if (dateForeCast == null) {
      alert('Selecione uma data que deseja para a retirada do bolo.')
      inputDate.current.focus()
      return false
    } else if (time == null) {
      alert('Selecione um horário que deseja para a retirada do bolo.')
      inputTime.current.focus()
      return false
    } else if (diameterState == null) {
      alert('Selecione pelo menos um diâmetro de bolo.')
      inputDiameter.current.focus()
      return false
    } else if (batterState[0] == null && batterState[1] == null) {
      alert('Selecione pelo menos uma massa de bolo')
      inputBatter.current.focus()
      return false
    } else if (filling[0] == null && filling[1] == null) {
      alert('Selecione pelo menos um recheio')
      inputFilling.current.focus()
      return false
    } else if (payment == null) {
      alert('Selecione pelo menos um método de pagamento')
      return false
    }
    setHandleResumeModal(true)
  }

  function handleCloseResumeModal() {
    setFilling([])
    setAddFilling([])
    setHandleResumeModal(false)
  }
  //------ //

  function handleOpenPriceTableModal() {
    setHandlePriceTableModal(true)
  }

  function handleClosePriceTableModal() {
    setHandlePriceTableModal(false)
  }

  //Estado diâmetros do bolo
  function changeDiameter(evt) {
    setDiameter(evt.target.value)
  }

  //Estado Massas de Bolo
  function changeBatter(evt) {
    if (batterState.find(val => val == evt.target.value)) {
      setBatterState(batterState.filter(val => val != evt.target.value))
    } else {
      setBatterState([batterState[1], evt.target.value])
    }
  }

  // Estado Recheios + Estado Recheios Adicionais (auxiliar)
  function changeFilling(evt) {
    if (evt.target.name == 'recheioAdd') {
      if (addFilling.find(val => val == evt.target.value)) {
        setAddFilling(addFilling.filter(val => val != evt.target.value))
      } else {
        setAddFilling([addFilling[1], evt.target.value])
      }
    }

    if (filling[0] && filling[1] && evt.target.name == 'recheio') {
      addFilling.shift()
    }

    //Verifica se o valor já existe nos dois selecionados
    if (filling.find(val => val == evt.target.value)) {
      // Caso existe, filtra tudo que não seja o valor selecionado ( utilizado para desmarcar )
      setFilling(filling.filter(val => val != evt.target.value))
    } else {
      // Caso seja um valor novo, move  o ultimo valor para o inicio e adiciona o valor novo no fim da estrutura
      setFilling([filling[1], evt.target.value])
    }
  }

  function handlePriceGlitter(price) {
    setPriceGlitter(price)
  }

  function totalPriceOfCake() {
    const cakeValue = cakeSize[diameterState]
    const valueFillings = filling.reduce((acumulator, filling) => {
      const currentValueFillings = aditionalFilling[filling]
        ? aditionalFilling[filling][diameterState]
        : 0
      return Number(acumulator) + Number(currentValueFillings)
    }, 0)
    return Number(cakeValue) + Number(valueFillings) + Number(priceGlitter)
  }

  const total = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(totalPriceOfCake())

  return (
    <>
      <div className="container-img">
        <img src={avatar} className="imagem-avatar" alt="imagem-avatar" />
        <img src={balaoMenu} className="imagem-balao" alt="" />
      </div>
      <form>
        <div className="form-container">
          <section className="form-section-input-text">
            <h2>Digite o seu nome</h2>
            <div className="container-label">
              <label>
                <input
                  type="text"
                  name="nome"
                  onChange={evt => setName(evt.target.value)}
                  placeholder="Digite seu nome..."
                  ref={inputName}
                />
              </label>
            </div>
          </section>

          <section className="form-section-input-text">
            <h2>Deseja tematizar o bolo?</h2>
            <div className="container-label">
              <label>
                <input
                  type="text"
                  name="theme"
                  onChange={evt => setTheme(evt.target.value)}
                  placeholder="Digite aqui o tema do bolo..."
                />
              </label>
            </div>
          </section>

          <section className="form-section-input-select">
            <h2>Adicionar Topo?</h2>
            <p>(Preço a combinar)</p>
            <br />
            <div className="container-label">
              <label>
                <select
                  name="topo"
                  id="topo"
                  onChange={evt => setTop(evt.target.value)}
                >
                  <option>Escolha a opção</option>
                  <option value={top}>Sim</option>
                  <option value={top}>Não</option>
                </select>
              </label>
            </div>
          </section>

          <section className="form-section-input-date">
            <h2>Para quando deseja a retirada do bolo?</h2>
            <p>(Escolha data e horário)</p>
            <div className="container-label">
              <label>
                <input
                  type="date"
                  name="date"
                  ref={inputDate}
                  onChange={evt => setDateForecast(evt.target.value)}
                />
              </label>
              <label>
                <input
                  type="time"
                  name="time"
                  ref={inputTime}
                  onChange={evt => setTime(evt.target.value)}
                />
              </label>
            </div>
          </section>

          <section
            role="group"
            aria-labelledby="checkbox-group"
            className="form-section-one"
          >
            <h2>Diâmetro do bolo</h2>
            <p>(Escolha somente uma opção)</p>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="tamanho"
                  onChange={changeDiameter}
                  checked={diameterState == 15}
                  value="15"
                  ref={inputDiameter}
                />
                <span> - 15cm --------------------------- R$110,00</span>
                <p>( 10 a 15 fatias )</p>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="tamanho"
                  onChange={changeDiameter}
                  checked={diameterState == 20}
                  value="20"
                />
                <span> - 20cm --------------------------- R$160,00 </span>
                <p>( 20 a 25 fatias )</p>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="tamanho"
                  onChange={changeDiameter}
                  checked={diameterState == 25}
                  value="25"
                />
                <span> - 25cm --------------------------- R$220,00</span>
                <p>( 35 a 40 fatias )</p>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="tamanho"
                  onChange={changeDiameter}
                  checked={diameterState == 30}
                  value="30"
                />
                <span> - 30cm --------------------------- R$280,00</span>
                <p>( 55 a 60 fatias )</p>
              </label>
            </div>
          </section>

          <RenderGlitter
            state={{ diameterState }}
            clickCheckBox={handlePriceGlitter}
          />

          {/* --- */}
          <div className="warning-text">
            <p>Selecione Massas e Recheios </p>
            <br />
            <h2>
              OBS:<u> Máximo dois de cada</u>
            </h2>
            <br />
            <BsFileArrowDown size={30} color="green" />
          </div>
          <section
            role="group"
            className="form-section-two"
            aria-labelledby="checkbox-group"
          >
            <h2>Massas</h2>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Branca"
                  ref={inputBatter}
                  className="checkbox"
                  onChange={changeBatter}
                  checked={
                    batterState.find(val => val == 'Massa Branca')
                      ? true
                      : false
                  }
                />
                <span>- Massa Branca</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Chocolate"
                  onChange={changeBatter}
                  checked={
                    batterState.find(val => val == 'Massa Chocolate')
                      ? true
                      : false
                  }
                />
                <span>- Massa Chocolate</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Baunilha"
                  onChange={changeBatter}
                  checked={
                    batterState.find(val => val == 'Massa Baunilha')
                      ? true
                      : false
                  }
                />
                <span>- Massa Baunilha</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Mesclada"
                  onChange={changeBatter}
                  checked={
                    batterState.find(val => val == 'Massa Mesclada')
                      ? true
                      : false
                  }
                />
                <span>- Massa Mesclada</span>
                <p>( Massa branca misturada com chocolate )</p>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Formigueiro"
                  onChange={changeBatter}
                  checked={
                    batterState.find(val => val == 'Massa Formigueiro')
                      ? true
                      : false
                  }
                />
                <span>- Massa Formigueiro</span>
                <p> ( Massa branca misturada com granulado )</p>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="massa"
                  value="Massa Mista"
                  onChange={changeBatter}
                  checked={
                    batterState.find(val => val == 'Massa Mista') ? true : false
                  }
                />
                <span>- Massa Mista</span>
                <p>( Massa branca e massa de chocolate/separadas )</p>
              </label>
            </div>
          </section>

          {/* --- */}

          <section
            role="group"
            className="form-section-three"
            aria-labelledby="checkbox-group"
          >
            <h2>Recheios</h2>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Amendoim"
                  ref={inputFilling}
                  onChange={changeFilling}
                  checked={
                    filling.find(val => val == 'Amendoim') ? true : false
                  }
                />
                <span> - Amendoim</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Brigadeiro Tradicional"
                  onChange={changeFilling}
                  checked={
                    filling.find(val => val == 'Brigadeiro Tradicional')
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro Tradicional</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Brigadeiro Branco"
                  onChange={changeFilling}
                  checked={
                    filling.find(val => val == 'Brigadeiro Branco')
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro Branco</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Brigadeiro de Café"
                  onChange={changeFilling}
                  checked={
                    filling.find(val => val == 'Brigadeiro de Café')
                      ? true
                      : false
                  }
                />
                <span> - Brigadeiro de Café</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Beijinho"
                  onChange={changeFilling}
                  checked={
                    filling.find(val => val == 'Beijinho') ? true : false
                  }
                />
                <span> - Beijinho</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Doce de Leite"
                  onChange={changeFilling}
                  checked={
                    filling.find(val => val == 'Doce de Leite') ? true : false
                  }
                />
                <span> - Doce de Leite</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="Ninho"
                  onChange={changeFilling}
                  checked={filling.find(val => val == 'Ninho') ? true : false}
                />
                <span> - Ninho</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheio"
                  value="4 Leites"
                  onChange={changeFilling}
                  checked={
                    filling.find(val => val == '4 Leites') ? true : false
                  }
                />
                <span> - 4 Leites</span>
              </label>
            </div>
          </section>

          {/*---*/}

          <section
            role="group"
            className="form-section-four"
            aria-labelledby="checkbox-group"
          >
            <h2>Recheios com valor adicional</h2>
            <div>
              <input
                type="button"
                value="Clique aqui para a tabela de preços"
                className="button-price-modal"
                onClick={handleOpenPriceTableModal}
              />
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Abacaxi"
                  onChange={changeFilling}
                  checked={filling.find(val => val == 'Abacaxi') ? true : false}
                />
                <span> - Abacaxi</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Ameixa"
                  onChange={changeFilling}
                  checked={filling.find(val => val == 'Ameixa') ? true : false}
                />
                <span> - Ameixa</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Limão Siciliano"
                  onChange={changeFilling}
                  checked={
                    filling.find(val => val == 'Limão Siciliano') ? true : false
                  }
                />
                <span> - Limão Siciliano</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Maracujá"
                  onChange={changeFilling}
                  checked={
                    filling.find(val => val == 'Maracujá') ? true : false
                  }
                />
                <span> - Maracujá</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Morango"
                  onChange={changeFilling}
                  checked={filling.find(val => val == 'Morango') ? true : false}
                />
                <span> - Morango</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Nozes"
                  onChange={changeFilling}
                  checked={filling.find(val => val == 'Nozes') ? true : false}
                />
                <span> - Nozes</span>
              </label>
            </div>

            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Ovomaltine"
                  onChange={changeFilling}
                  checked={
                    filling.find(val => val == 'Ovomaltine') ? true : false
                  }
                />
                <span> - Ovomaltine</span>
              </label>
            </div>
            <div className="containerLabel">
              <label>
                <input
                  type="checkbox"
                  name="recheioAdd"
                  value="Oreo"
                  onChange={changeFilling}
                  checked={filling.find(val => val == 'Oreo') ? true : false}
                />
                <span> - Oreo</span>
              </label>
            </div>
          </section>

          <section className="form-section-input-select">
            <h2>Método de pagamento</h2>
            <br />
            <div className="container-label">
              <label>
                <select
                  name="payment"
                  id="payment"
                  onChange={evt => setPayment(evt.target.value)}
                >
                  <option>Escolha a opção</option>
                  <option value="À vista">À vista</option>
                  <option value="Pix">Pix</option>
                </select>
              </label>
            </div>
          </section>

          <section className="form-section-input-text">
            <h2>Deseja constar alguma observação?</h2>
            <p>(Constará no envio final do pedido)</p>
            <br />
            <div className="container-label">
              <label>
                <textarea
                  value={textArea}
                  onChange={evt => setTextArea(evt.target.value)}
                ></textarea>
              </label>
            </div>
          </section>
        </div>
        <div className="form-button">
          <input
            type="button"
            value="Resumo do Pedido"
            className="button-resume-modal"
            onClick={handleOpenResumeModal}
          />
        </div>
      </form>
      <ResumeModal
        isOpen={handleResumeModal}
        onRequestClose={handleCloseResumeModal}
        states={{
          diameterState,
          batterState,
          filling,
          addFilling,
          name,
          theme,
          time,
          top,
          textArea,
          dateForeCast,
          aditionalFilling,
          cakeSize,
          priceGlitter,
          payment,
          total
        }}
      />
      <PriceTableModal
        isOpen={handlePriceTableModal}
        onRequestClose={handleClosePriceTableModal}
      />
    </>
  )
}
