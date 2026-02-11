import { useFormik } from 'formik';
import { getSaludo } from '../api/getSaludo';

import './style.css';

const FormFormik = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      accept: false,
    },

    onSubmit: async (values) => {
      const saludo = await getSaludo(values.nombre);

      if (!values.nombre || !values.accept) {
        formik.setErrors({
          nombre: !values.nombre ? 'El nombre es obligatorio' : undefined,
          accept: !values.accept ? 'Debes aceptar los términos' : undefined,
        });
        return;
      }

      try {
        sessionStorage.setItem('saludo', saludo);
      } catch (error) {
        console.warn('No se pudo guardar el saludo en sessionStorage', error);
      }
      window.history.pushState({}, '', '/saludo');
      window.dispatchEvent(new PopStateEvent('popstate'));

      formik.resetForm(); // Resetear formulario
    },
  });

  return (
    <div>
      <h2>Formulario con Formik</h2>

      {/* La función handleSubmit ya viene incluida en el paquete formik */}
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre:</label>
          <input type='text' id='nombre' name='nombre' value={formik.values.nombre} onChange={formik.handleChange} />
          {formik.errors.nombre && <span className='error'>{formik.errors.nombre}</span>}
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
          {formik.errors.accept && <span className='error'>{formik.errors.accept}</span>}
        </div>
        <input type='submit' value='Enviar' className='btn-submit' />
      </form>
    </div>
  );
};

export default FormFormik;
