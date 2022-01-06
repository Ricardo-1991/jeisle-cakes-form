import React, {useState} from 'react'
import '../Form/FormStyle.css'
import { Formik, Field, Form} from 'formik'
import avatar from '../../images/jeysle-menu.jpeg'


const tamanhosDeBolo = {
  "15": 110, 
  "20": 160,
  "25": 220,
  "30": 280

}

const recheiosAdicionais = {
  "Abacaxi": {
    "15": 8,
    "20": 10,
    "25": 14,
    "30": 16
  },

  "Ameixa": {
    "15": 8,
    "20": 10,
    "25": 14,
    "30": 16
  },

  "Limão Siciliano": {
    "15": 5,
    "20": 8,
    "25": 10,
    "30": 12.
  },

  "Maracujá": {
    "15": 5,
    "20": 8,
    "25": 10,
    "30": 12.
  },

  "Morango": {
    "15": 8,
    "20": 16,
    "25": 24,
    "30": 32,
  },

  
  "Nozes": {
    "15": 7,
    "20": 14,
    "25": 21,
    "30": 28,
  },

  "Ovomaltine": {
    "15": 7,
    "20": 14,
    "25": 21,
    "30": 28,
  },

  "Oreo": {
    "15": 8,
    "20": 16,
    "25": 24,
    "30": 32,
  },
}

export const ComponentForm = () => {

  const [diameterState, setDiameter] = useState(null);

  const [batterState, setBatterState] = useState([null, null]);

  const [filling, setFilling] = useState([null,null]);

  //Estado diâmetros do bolo
  const changeDiameter = (evt) => {
    setDiameter(evt.target.value)   
  }

  //Estado Massas de Bolo
  const changeBatter = (evt)=> {
    if(batterState.find(val => val == evt.target.value)){
      setBatterState(batterState.filter(val => val != evt.target.value))
    } else {
      setBatterState([batterState[1], evt.target.value])
    }
  }
  
  // Estado Recheios
  const changeFilling = evt =>{
      //Verifica se o valor já existe nos dois selecionados
      if(filling.find(val => val == evt.target.value)){
        // Caso existe, filtra tudo que não seja o valor selecionado ( utilizado para desmarcar )
        setFilling(filling.filter( val => val != evt.target.value))
      }else {
        // Caso seja um valor novo, move  o ultimo valor para o inicio e adiciona o valor novo no fim da estrutura
        setFilling([filling[1], evt.target.value])
      }
  }

  function totalPriceOfCake (){
    const cakeValue = tamanhosDeBolo[diameterState]
    const valorDosRecheios = filling.reduce((acumulator, recheio) => {
      const valorDoRecheioAtual = recheiosAdicionais[recheio] ? recheiosAdicionais[recheio][diameterState] : 0
      return Number(acumulator) + Number(valorDoRecheioAtual)
    }, 0)
    return Number(cakeValue) + Number(valorDosRecheios)
  }
  
  const total = totalPriceOfCake()
 

  function handleSubmit () {
    location.href = `https://api.whatsapp.com/send?phone=5574999990520&text=
    _Tamanho_: *${diameterState == null? `` : `${diameterState}  cm`}* %0a_Massa do bolo_: *${ batterState[0] == null ? `${batterState.slice(1)} ` : `${batterState.join(' e ')}`}* 
    %0a_Recheios_: *${filling[0] == null? `${filling.slice(1)}` : `${filling.join(' e ')}`}*
    Valor total do bolo: R$${total}`
 }

  return (
    <>
      <div className='container-img'>
        <img src={avatar} className='imagem-avatar' alt="imagem-avatar" />
      </div>
      <Formik
        initialValues={{
          toggle: false, // Esses dois valores iniciais estão no exemplo da documentação de Checkbox com Formik
          checked: [],
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => ( // Funciona como se fosse um useState guardando os dados dos <Fields>(inputs type="checkbox"
          <Form>
            
            <div className="form-container">
  
              <section
                role="group"
                aria-labelledby="checkbox-group"
                className={diameterState? `hover` : 'form-section-one'}
              >  
          
                <h2>Diâmetros</h2>
                <p>(Escolha somente uma opção)</p>
                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="tamanho" onChange={changeDiameter} checked={diameterState == 15}  value="15" />
                     15cm ------------------------------ R$110,00
                    <p>( 10 a 15 fatias )</p>
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="tamanho" onChange={changeDiameter} checked={diameterState == 20} value="20" />
                    20cm ------------------------------ R$160,00
                    <p>( 20 a 25 fatias )</p>     
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="tamanho" onChange={changeDiameter} checked={diameterState == 25}  value="25" />
                    25cm ------------------------------ R$220,00
                    <p>( 35 a 40 fatias )</p>
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="tamanho" onChange={changeDiameter} checked={diameterState == 30} value="30"  />
                    30cm ------------------------------ R$280,00
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
                <div className='containerLabel'>
                  <label>
                    <Field
                      type="checkbox"
                      name="massa"
                      value="Massa Branca"
                      className='checkbox'
                      onClick={changeBatter} checked={batterState.find(val => val == "Massa Branca") ? true : false } 
                    />
                    - Massa Branca
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field
                      type="checkbox"
                      name="massa"
                      value="Massa Chocolate"
                      onClick={changeBatter} checked={batterState.find(val => val == "Massa Chocolate")  ? true : false} 
                    />
                    - Massa Chocolate
                  </label>
                </div>

                <div className='containerLabel'>
                  <Field
                    type="checkbox"
                    name="massa"
                    value="Massa Baunilha"
                    onClick={changeBatter} checked={batterState.find(val => val == "Massa Baunilha")  ? true : false} 
                  />
                  <label> - Massa Baunilha</label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field
                      type="checkbox"
                      name="massa"
                      value="Massa Mesclada"
                      onClick={changeBatter} checked={batterState.find(val => val == "Massa Mesclada")  ? true : false} 
                    />
                    - Massa Mesclada
                  </label>
                  <p>( Massa branca misturada com chocolate )</p>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field
                      type="checkbox"
                      name="massa"
                      value="Massa Formigueiro"
                      onClick={changeBatter} checked={batterState.find(val => val == "Massa Formigueiro")  ? true : false} 
                    />
                    - Massa Formigueiro
                  </label>
                  <p> ( Massa branca misturada com granulado )</p>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="massa" value="Massa Mista" onClick={changeBatter} checked={batterState.find(val => val == "Massa Mista")  ? true : false } />
                    - Massa Mista
                  </label>
                  <p>( Massa branca e massa de chocolate/separadas )</p>
                </div>
              </section>

              {/* --- */}

              <section
                role="group"
                className="form-section-three"
                aria-labelledby="checkbox-group"
              >
                <h2>Recheios</h2>
                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="recheio" value="Amendoim" onChange={changeFilling} checked={filling.find( val => val == 'Amendoim')  ? true : false } />-
                    Amendoim
                  </label>
                </div>

                <div className='containerLabel'>
                  <Field
                    type="checkbox"
                    name="recheio"
                    value="Brigadeiro Tradicional"
                    onChange={changeFilling} checked={filling.find( val => val == 'Brigadeiro Tradicional')  ? true : false }
                  />
                  <label> - Brigadeiro Tradicional</label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field
                      type="checkbox"
                      name="recheio"
                      value="Brigadeiro Branco"
                      onChange={changeFilling} checked={filling.find( val => val == 'Brigadeiro Branco')  ? true : false }
                    />
                    - Brigadeiro Branco
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field
                      type="checkbox"
                      name="recheio"
                      value="Brigadeiro de Café"
                      onChange={changeFilling} checked={filling.find( val => val == 'Brigadeiro de Café')  ? true : false }
                    />
                    - Brigadeiro de Café
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="recheio" value="Beijinho" onChange={changeFilling} checked={filling.find( val => val == 'Beijinho')  ? true : false } />-
                    Beijinho
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field
                      type="checkbox"
                      name="recheio"
                      value="Doce de Leite"
                      onChange={changeFilling} checked={filling.find( val => val == 'Doce de Leite')  ? true : false }
                    />
                    - Doce de Leite
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="recheio" value="Ninho" onChange={changeFilling} checked={filling.find( val => val == 'Ninho')  ? true : false } />-
                    Ninho
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="recheio" value="4 Leites" onChange={changeFilling} checked={filling.find( val => val == '4 Leites')  ? true : false } />- 4
                    Leites
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
                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Abacaxi" onChange={changeFilling} checked={filling.find( val => val == 'Abacaxi')  ? true : false } />-
                    Abacaxi
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field
                      type="checkbox"
                      name="recheioAdd"
                      value="Ameixa"
                      onChange={changeFilling} checked={filling.find( val => val == 'Ameixa')  ? true : false }
                    />
                    - Ameixa
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field
                      type="checkbox"
                      name="recheioAdd"
                      value="Limão Siciliano"
                      onChange={changeFilling} checked={filling.find( val => val == 'Limão Siciliano')  ? true : false }
                    />
                    - Limão Siciliano
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Maracujá" onChange={changeFilling} checked={filling.find( val => val == 'Maracujá')  ? true : false } />-
                    Maracujá
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Morango" onChange={changeFilling} checked={filling.find( val => val == 'Morango')  ? true : false } />-
                    Morango
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Nozes" onChange={changeFilling} checked={filling.find( val => val == 'Nozes')  ? true : false } />-
                    Nozes
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Ovomaltine" onChange={changeFilling} checked={filling.find( val => val == 'Ovomaltine')  ? true : false } />-
                    Ovomaltine
                  </label>
                </div>

                <div className='containerLabel'>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Oreo" onChange={changeFilling} checked={filling.find( val => val == 'Oreo')  ? true : false } />- Oreo
                  </label>
                </div>
              </section>
            </div>
            <div className="form-button">
              <button type="submit">Enviar pedido</button>
            </div>   
          </Form>
        )}
      </Formik>
    </>
  )
}
