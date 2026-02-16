import { useFormik } from 'formik';
import { getSaludo } from '../api/getSaludo';
import * as Yup from 'yup';

import './style.css';

const validacionYUP = Yup.object().shape({
  nombre: Yup.string().required('El nombre es obligatorio'),
  accept: Yup.boolean().oneOf([true], 'Debes aceptar los términos'),
});

export default function FormFormikYup() {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      accept: false,
    },

    validationSchema: validacionYUP,

    onSubmit: async (values) => {
      const saludo = await getSaludo(values.nombre);

      try {
        sessionStorage.setItem('saludo', saludo);
      } catch (error) {
        console.warn('No se pudo guardar el saludo en sessionStorage', error);
      }

      window.history.pushState({}, '', '/saludo');
      window.dispatchEvent(new PopStateEvent('popstate'));
      formik.resetForm();
    },
  });

  return (
    <div>
      <h2>Formulario con Formik y Yup</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre:</label>
          <input type='text' id='nombre' name='nombre' value={formik.values.nombre} onChange={formik.handleChange} />
          {formik.touched.nombre && formik.errors.nombre && <span className='error'>{formik.errors.nombre}</span>}
        </div>

        <div style={{ display: 'flex' }} className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} />
        </div>

        <div className='form-group checkbox'>
          <label htmlFor='accept'>Aceptar términos:</label>
          <input
            type='checkbox'
            id='accept'
            name='accept'
            checked={formik.values.accept}
            onChange={formik.handleChange}
          />
          {formik.touched.accept && formik.errors.accept && <span className='error'>{formik.errors.accept}</span>}
        </div>
        <input type='submit' value='Enviar' className='btn-submit' />
      </form>
    </div>
  );
}
