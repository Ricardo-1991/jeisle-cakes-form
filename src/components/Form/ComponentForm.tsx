import '../Form/FormStyle.css'
import FormSchemas from '../Schemas/FormSchemas'
import { Formik, Field, Form, ErrorMessage } from 'formik'

type userForm = {}

export const ComponentForm: React.FC<{}> = () => {
  const onSubmit = ({ values }: any) => {
    location.href = `https://api.whatsapp.com/send?phone=5573991578697&text=${values}%0a `
  }

  return (
    <div>
      <Formik
        validationSchema={FormSchemas}
        onSubmit={onSubmit}
        initialValues={{
          toggle: false,
          checked: []
        }}
      >
        {({ values }) => (
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
                    <Field type="checkbox" name="checked" value="15" />
                    15cm ------------------------------ R$85,00
                    <p>( 10 a 15 fatias )</p>
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="20" />
                    20cm ------------------------------ R$135,00
                    <p>( 20 a 25 fatias )</p>
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="25" />
                    25cm ------------------------------ R$185,00
                    <p>( 35 a 40 fatias )</p>
                  </label>
                </div>

                <div>
                  <label htmlFor="user">
                    <Field type="checkbox" name="checked" value="30" />
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
                      name="checked"
                      value="Massa Branca"
                    />
                    - Massa Branca
                  </label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="checked"
                      value="Massa Chocolate"
                    />
                    - Massa Chocolate
                  </label>
                </div>

                <div>
                  <Field
                    type="checkbox"
                    name="checked"
                    value="Massa Baunilha"
                  />
                  <label> - Massa Baunilha</label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="checked"
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
                      name="checked"
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
                    <Field type="checkbox" name="checked" value="Ameixa" />-
                    Ameixa
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="Amendoim" />-
                    Amendoim
                  </label>
                </div>

                <div>
                  <Field
                    type="checkbox"
                    name="checked"
                    value="Brigadeiro Tradicional"
                  />
                  <label> - Brigadeiro Tradicional</label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="checked"
                      value="Brigadeiro Branco"
                    />
                    - Brigadeiro Branco
                  </label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="checked"
                      value="Brigadeiro de Café"
                    />
                    - Brigadeiro de Café
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="Beijinho" />-
                    Beijinho
                  </label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="checked"
                      value="Doce de Leite"
                    />
                    - Doce de Leite
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="Ninho" />-
                    Ninho
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="4 Leites" />- 4
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
                    <Field type="checkbox" name="checked" value="Abacaxi" />-
                    Abacaxi
                  </label>
                </div>

                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="checked"
                      value="Limão Siciliano"
                    />
                    - Limão Siciliano
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="Maracujá" />-
                    Maracujá
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="Morango" />-
                    Morango
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="Nozes" />-
                    Nozes
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="Ovomaltine" />-
                    Ovomaltine
                  </label>
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="checked" value="Oreo" />- Oreo
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
