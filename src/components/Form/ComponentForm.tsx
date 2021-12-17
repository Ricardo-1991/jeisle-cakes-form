import '../Form/FormStyle.css'
import FormSchemas from '../Schemas/FormSchemas'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'

export const ComponentForm: React.FC<{}> = () => {
  const onSubmit = (values: any, actions: any) => {
    actions.resetForm({
      values: {
        user: '',
        cake: ''
      }
    })

    location.href = `https://api.whatsapp.com/send?phone=557391914904&text= *Cliente:*${values.user} %0a *Bolo:* ${values.cake}`
  }

  return (
    <div>
      <Formik
        validationSchema={FormSchemas}
        onSubmit={onSubmit}
        initialValues={{ user: '', cake: '' }}
      >
        {values => (
          <Form>
            <div>
              <label htmlFor="user">Usuário</label>
              <Field type="text" id="user" name="user" />
            </div>

            <div>
              <label htmlFor="cake">Bolo</label>
              <Field type="text" id="cake" name="cake" />
            </div>

            <div>
              <button type="submit">Registrar Pedido</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
