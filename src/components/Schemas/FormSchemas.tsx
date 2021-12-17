import * as Yup from 'yup'

export default Yup.object().shape({
  user: Yup.string().required('Este campo é obrigatório*'),
  cake: Yup.string().required('Este campo é obrigatório*')
})
