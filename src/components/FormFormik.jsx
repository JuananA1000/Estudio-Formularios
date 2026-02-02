const FormFormik = () => {
  return (
    <div>
      <h2>Formulario con Formik</h2>

      <form action=''>
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
            <input type='text' id='nombre' name='nombre' />
          </div>

          <div style={{ display: 'flex' }}>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' name='email' />
          </div>

          <div style={{ display: 'flex' }}>
            <label htmlFor='accept'>Aceptar términos:</label>
            <input type='checkbox' id='accept' name='accept' />
          </div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormFormik;
