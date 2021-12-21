import '../Form/FormStyle.css'
import { Formik, Field, Form } from 'formik'

export const ComponentForm = () => {

  function handleSubmit (values) {
     location.href = `https://api.whatsapp.com/send?phone=5573991578697&text= ${values.tamanho} %0a ${values.massa} %0a ${values.recheio} %0a ${values.recheioAdd} `
  }

  return (
   
    <div>
      <Formik
        initialValues={{
          toggle: false, // Esses dois valores iniciais estão no exemplo da documentação de Checkbox com Formik
          checked: []
        }}
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
                    <Field type="checkbox" name="tamanho"  value="15"  />
                    15cm ------------------------------ R$85,00
                    <p>( 10 a 15 fatias )</p>
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="tamanho" value="20"    />
                    20cm ------------------------------ R$135,00
                    <p>( 20 a 25 fatias )</p>     
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="tamanho" value="25" />
                    25cm ------------------------------ R$185,00
                    <p>( 35 a 40 fatias )</p>
                  </label>
                </div>

                <div>
                  <label htmlFor="user">
                    <Field type="checkbox" name="tamanho" value="30" />
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
                    />
                    - Massa Chocolate
                  </label>
                </div>

                <div>
                  <Field
                    type="checkbox"
                    name="massa"
                    value="Massa Baunilha"
                  />
                  <label> - Massa Baunilha</label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="massa"
                      value="Massa Mesclada"
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
                    />
                    - Massa Formigueiro
                  </label>
                  <p> ( Massa branca misturada com granulado )</p>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="Massa Mista" />
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
                    <Field type="checkbox" name="recheio" value="Ameixa" />-
                    Ameixa
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheio" value="Amendoim" />-
                    Amendoim
                  </label>
                </div>

                <div>
                  <Field
                    type="checkbox"
                    name="recheio"
                    value="Brigadeiro Tradicional"
                  />
                  <label> - Brigadeiro Tradicional</label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="recheio"
                      value="Brigadeiro Branco"
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
                    />
                    - Brigadeiro de Café
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheio" value="Beijinho" />-
                    Beijinho
                  </label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="recheio"
                      value="Doce de Leite"
                    />
                    - Doce de Leite
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheio" value="Ninho" />-
                    Ninho
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheio" value="4 Leites" />- 4
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
                    <Field type="checkbox" name="recheioAdd" value="Abacaxi" />-
                    Abacaxi
                  </label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="recheioAdd"
                      value="Limão Siciliano"
                    />
                    - Limão Siciliano
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Maracujá" />-
                    Maracujá
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Morango" />-
                    Morango
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Nozes" />-
                    Nozes
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Ovomaltine" />-
                    Ovomaltine
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="recheioAdd" value="Oreo" />- Oreo
                  </label>
                </div>
              </section>
            </div>
            <div className="form-button">
              <button type="submit" onClick={() =>handleSubmit(values)}>Enviar pedido</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
