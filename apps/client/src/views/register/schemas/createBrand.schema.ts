import * as yup from 'yup';

export const createBrandSchema = yup.object().shape({
  name: yup.string().required('Nombre es requerido.'),
  owner: yup.string().required('Titular es requerido.'),
  description: yup.string().required('Descripcion es requerida'),
});
