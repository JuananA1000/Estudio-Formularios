import { useState } from 'react';

const FormBasico = () => {
  const [form, setForm] = useState({ nombre: '', email: '', aceptar: false });

  /**
   * Es una función genérica que actualiza el estado del formulario cada vez que se escribe o marca el checkbox.
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  /**
   * Esta función maneja el envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Formulario BÁSICO enviado:', form);

    setForm({ nombre: '', email: '', aceptar: false });
  };

  return (
    <div>
      <h2>Formulario Básico</h2>

      <form onSubmit={handleSubmit}>
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
            <input type='text' id='nombre' name='nombre' value={form.nombre} onChange={handleChange} />
          </div>

          <div style={{ display: 'flex' }}>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' name='email' value={form.email} onChange={handleChange} />
          </div>

          <div style={{ display: 'flex' }}>
            <label htmlFor='aceptar'>Aceptar términos:</label>
            <input type='checkbox' id='aceptar' name='aceptar' checked={form.aceptar} onChange={handleChange} />
          </div>
          <input type='submit' value='Enviar' />
        </div>
      </form>
    </div>
  );
};

export default FormBasico;
