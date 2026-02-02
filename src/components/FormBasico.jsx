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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const respuesta = await fetch(`https://api.genderize.io?name=${form.nombre}`);
    const data = await respuesta.json();

    if (data.gender === 'female') {
      console.log(`¡Bienvenida ${form.nombre}!`);
    } else if (data.gender === 'male') {
      console.log(`¡Bienvenido ${form.nombre}!`);
    } else {
      console.log(`¡Bienvenide, RARITO! Te llamabas ${form.nombre} no?`);
    }

    console.log('Formulario BÁSICO enviado:', form, data);
    setForm({ nombre: '', email: '', aceptar: false }); // Reiniciar el formulario
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
