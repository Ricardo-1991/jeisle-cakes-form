import React, { useState, useRef } from 'react'
import '../Form/FormStyle.css'
import avatar from '../../images/jeysle-menu.jpeg'
import { ResumeModal } from '../ResumeModal/ResumeModal'

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

export const ComponentForm = () => {
  const inputDiameter = useRef(false)
  const inputBatter = useRef(false)
  const inputFilling = useRef(false)

  const [name, setName] = useState('')

  const [diameterState, setDiameter] = useState(null)

  const [batterState, setBatterState] = useState([null, null])

  const [filling, setFilling] = useState([])

  const [normalFilling, setNormalFilling] = useState([])
  const [addFilling, setAddFilling] = useState([])

  const [handleResumeModal, setHandleResumeModal] = useState(false)

  function handleOpenResumeModal() {
    // if(diameterState == null){
    //   alert("Selecione pelo menos um diâmetro de bolo.")
    //   inputDiameter.current.focus()
    //   return false

    // } else if(batterState[0] == null && batterState[1] == null){
    //   alert("Selecione pelo menos uma massa de bolo")
    //   inputBatter.current.focus()
    //   return false

    // } else if (filling[0] == null && filling[1] == null ){
    //   alert("Selecione pelo menos um recheio")
    //   inputFilling.current.focus()
    //   return false
    // }
    setHandleResumeModal(true)
  }

  function handleCloseResumeModal() {
    setHandleResumeModal(false)
  }

  //Estado diâmetros do bolo
  const changeDiameter = evt => {
    setDiameter(evt.target.value)
  }

  //Estado Massas de Bolo
  const changeBatter = evt => {
    if (batterState.find(val => val == evt.target.value)) {
      setBatterState(batterState.filter(val => val != evt.target.value))
    } else {
      setBatterState([batterState[1], evt.target.value])
    }
  }

  // Estado Recheios
  const changeFilling = evt => {
    if (evt.target.name == 'recheio') {
      setNormalFilling([normalFilling[1], evt.target.value])
    } else if (evt.target.name == 'recheioAdd') {
      // Caso seja um valor novo, move  o ultimo valor para o inicio e adiciona o valor novo no fim da estrutura
      setAddFilling([addFilling[1], evt.target.value])
    }

    //Verifica se o valor já existe nos dois selecionados
    if (filling.find(val => val == evt.target.value)) {
      // Caso existe, filtra tudo que não seja o valor selecionado ( utilizado para desmarcar )
      setFilling(filling.filter(val => val == evt.target.value))
    } else {
      // Caso seja um valor novo, move  o ultimo valor para o inicio e adiciona o valor novo no fim da estrutura
      setFilling([filling[1], evt.target.value])
    }
  }

  function totalPriceOfCake() {
    const cakeValue = cakeSize[diameterState]
    const valueFillings = filling.reduce((acumulator, filling) => {
      const currentValueFillings = aditionalFilling[filling]
        ? aditionalFilling[filling][diameterState]
        : 0
      return Number(acumulator) + Number(currentValueFillings)
    }, 0)
    return Number(cakeValue) + Number(valueFillings)
  }

  const total = totalPriceOfCake()

  function handleSubmit(evt) {
    evt.preventDefault()

    location.href = `https://api.whatsapp.com/send?phone=5574999990520&text=
    _Tamanho_: *${
      diameterState == null ? `` : `${diameterState}  cm`
    }* %0a_Massa do bolo_: *${
      batterState[0] == null
        ? `${batterState.slice(1)} `
        : `${batterState.join(' e ')}`
    }* 
    %0a_Recheios_: *${
      filling[0] == null ? `${filling.slice(1)}` : `${filling.join(' e ')}`
    }*
    Valor total do bolo: R$${total}`
  }

  const filteredNormal = filling.map(filling => {
    for (let index in normalFilling) {
      if (filling == normalFilling[index]) {
        return normalFilling[index]
      }
    }
  })

  const filteredAdd = filling.map(filling => {
    for (let index in addFilling) {
      if (filling == addFilling[index]) {
        return addFilling[index]
      }
    }
  })

  return (
    <>
      <div className="container-img">
        <img src={avatar} className="imagem-avatar" alt="imagem-avatar" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <section className="form-section-name">
            <h2>Digite o seu nome</h2>
            <div className="container-label">
              <label>
                <input
                  type="text"
                  name="nome"
                  onChange={evt => setName(evt.target.value)}
                  placeholder="Digite seu nome..."
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
                  ref={inputDiameter}
                  onChange={changeDiameter}
                  checked={diameterState == 15}
                  value="15"
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

          {/* --- */}

          <img src="#" alt="Selecione a massa e 2 recheios" />
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
        </div>
        <div className="form-button">
          <input
            type="button"
            value="Resumo do Pedido"
            onClick={handleOpenResumeModal}
          />

          <ResumeModal
            isOpen={handleResumeModal}
            onRequestClose={handleCloseResumeModal}
            states={{
              diameterState,
              batterState,
              filling,
              name,
              aditionalFilling,
              filteredNormal,
              filteredAdd,
              cakeSize,
              total
            }}
            onHandleSubmit={handleSubmit}
          />
        </div>
        <footer className="form-footer">
          <h3>Desenvolvido por: Paulo Ricardo Santos Nascimento</h3>
        </footer>
      </form>
    </>
  )
}
