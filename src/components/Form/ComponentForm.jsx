import React, {useState} from 'react'
import '../Form/FormStyle.css'
import { Formik, Field, Form} from 'formik'

export const ComponentForm = () => {

  const [diameterState, setDiameter] = useState([null]);

  const [batterState, setBatterState] = useState([null]);

  const [filling, setFilling] = useState([null,null]);

  //Estado diâmetros do bolo
  const changeDiameter = (evt)=> {
     setDiameter(evt.target.value)
  }

  //Estado Massas de Bolo
  const changeBatter = (evt)=> {
    setBatterState(evt.target.value);
  }

  const changeFilling = (evt) =>{
    //Verifica se o valor já existe nos dois selecionados
    if(filling.find(val => val == evt.target.value)){
      // Caso existe, filtra tudo que não seja o valor selecionado ( utilizado para desmarcar )
      setFilling(filling.filter( val => val != evt.target.value));
    }else
    // Caso seja um valor novo, move  o ultimo valor para o inicio e adiciona o valor novo no fim da estrutura
    setFilling([filling[1], evt.target.value]);
  }

  function handleSubmit () {
    location.href = `https://api.whatsapp.com/send?phone=5573991914904&text= _Tamanho_: *${diameterState}cm* %0a_Massa do bolo_: *${batterState}* %0a_Recheios_: *${filling}* `
 }

  return (
    <div>
      <Formik
        initialValues={{
          toggle: false, // Esses dois valores iniciais estão no exemplo da documentação de Checkbox com Formik
          checked: []
        }}

        onSubmit={handleSubmit}
      >
        {({ values }) => ( // Funciona como se fosse um useState guardando os dados dos <Fields>(inputs type="checkbox")
                          
          <Form>
            <div className="form-container">
              <section
                role="group"
                aria-labelledby="checkbox-group"
                className="form-section-one"
              >
                <h2>Diâmetros</h2>
                <p>(Escolha somente uma opção)</p>
                <div>
                  <label>
                    <Field type="checkbox" name="tamanho" onChange={changeDiameter} checked={diameterState == 15}  value="15" />
                    15cm ------------------------------ R$85,00
                    <p>( 10 a 15 fatias )</p>
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="tamanho" onChange={changeDiameter} checked={diameterState == 20} value="20" />
                    20cm ------------------------------ R$135,00
                    <p>( 20 a 25 fatias )</p>     
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="tamanho" onChange={changeDiameter} checked={diameterState == 25}  value="25" />
                    25cm ------------------------------ R$185,00
                    <p>( 35 a 40 fatias )</p>
                  </label>
                </div>

                <div>
                  <label htmlFor="user">
                    <Field type="checkbox" name="tamanho" onChange={changeDiameter} checked={diameterState == 30} value="30"  />
                    30cm ------------------------------ R$235,00
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
                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="massa"
                      value="Massa Branca"
                      onClick={changeBatter} checked={batterState == "Massa Branca"} 
                    />
                    - Massa Branca
                  </label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="massa"
                      value="Massa Chocolate"
                      onClick={changeBatter} checked={batterState == "Massa Chocolate"} 
                    />
                    - Massa Chocolate
                  </label>
                </div>

                <div>
                  <Field
                    type="checkbox"
                    name="massa"
                    value="Massa Baunilha"
                    onClick={changeBatter} checked={batterState == "Massa Baunilha"} 
                  />
                  <label> - Massa Baunilha</label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="massa"
                      value="Massa Mesclada"
                      onClick={changeBatter} checked={batterState == "Massa Mesclada"} 
                    />
                    - Massa Mesclada
                  </label>
                  <p>( Massa branca misturada com chocolate)</p>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="massa"
                      value="Massa Formigueiro"
                      onClick={changeBatter} checked={batterState == "Massa Formigueiro"} 
                    />
                    - Massa Formigueiro
                  </label>
                  <p> ( Massa branca misturada com granulado )</p>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="massa" value="Massa Mista" onClick={changeBatter} checked={batterState == "Massa Mista" } />
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
                <div>
                  <label>
                    <Field type="checkbox" name="recheio" value="Ameixa" onChange={changeFilling} checked={filling.find( val => val == 'Ameixa')  ? true : false } />-
                    Ameixa
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheio" value="Amendoim" onChange={changeFilling} checked={filling.find( val => val == 'Amendoim')  ? true : false } />-
                    Amendoim
                  </label>
                </div>

                <div>
                  <Field
                    type="checkbox"
                    name="recheio"
                    value="Brigadeiro Tradicional"
                    onChange={changeFilling} checked={filling.find( val => val == 'Brigadeiro Tradicional')  ? true : false }
                  />
                  <label> - Brigadeiro Tradicional</label>
                </div>

                <div>
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

                <div>
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

                <div>
                  <label>
                    <Field type="checkbox" name="recheio" value="Beijinho" onChange={changeFilling} checked={filling.find( val => val == 'Beijinho')  ? true : false } />-
                    Beijinho
                  </label>
                </div>

                <div>
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

                <div>
                  <label>
                    <Field type="checkbox" name="recheio" value="Ninho" onChange={changeFilling} checked={filling.find( val => val == 'Ninho')  ? true : false } />-
                    Ninho
                  </label>
                </div>

                <div>
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
                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Abacaxi(Recheio Adicional)" onChange={changeFilling} checked={filling.find( val => val == 'Abacaxi(Recheio Adicional)')  ? true : false } />-
                    Abacaxi
                  </label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="recheioAdd"
                      value="Limão Siciliano(Recheio Adicional)"
                      onChange={changeFilling} checked={filling.find( val => val == 'Limão Siciliano(Recheio Adicional)')  ? true : false }
                    />
                    - Limão Siciliano
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Maracujá(Recheio Adicional)" onChange={changeFilling} checked={filling.find( val => val == 'Maracujá(Recheio Adicional)')  ? true : false } />-
                    Maracujá
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Morango(Recheio Adicional)" onChange={changeFilling} checked={filling.find( val => val == 'Morango(Recheio Adicional)')  ? true : false } />-
                    Morango
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Nozes(Recheio Adicional)" onChange={changeFilling} checked={filling.find( val => val == 'Nozes(Recheio Adicional)')  ? true : false } />-
                    Nozes
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Ovomaltine(Recheio Adicional)" onChange={changeFilling} checked={filling.find( val => val == 'Ovomaltine(Recheio Adicional)')  ? true : false } />-
                    Ovomaltine
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Oreo(Recheio Adicional)" onChange={changeFilling} checked={filling.find( val => val == 'Oreo(Recheio Adicional)')  ? true : false } />- Oreo
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
    </div>
  )
}
