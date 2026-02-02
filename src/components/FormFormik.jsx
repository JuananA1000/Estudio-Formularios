import { useFormik } from 'formik';

const FormFormik = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      accept: false,
    },

    onSubmit: (values) => {
      console.log('Formulario FORMIK enviado:', values);
    },
  });

  return (
    <div>
      <h2>Formulario con Formik</h2>

      {/* La función handleSubmit ya viene incluida en el paquete formik */}
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '20px',
            alignItems: 'flex-start',
          }}>
          <div style={{ display: 'flex' }}>
            <label htmlFor='nombre'>Nombre:</label>
            <input type='text' id='nombre' name='nombre' value={formik.values.nombre} onChange={formik.handleChange} />
          </div>

          <div style={{ display: 'flex' }}>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} />
          </div>

          <div style={{ display: 'flex' }}>
            <label htmlFor='accept'>Aceptar términos:</label>
            <input
              type='checkbox'
              id='accept'
              name='accept'
              checked={formik.values.accept}
              onChange={formik.handleChange}
            />
          </div>
          <input type='submit' value='Enviar' />
        </div>
      </form>
    </div>
  );
};

export default FormFormik;
