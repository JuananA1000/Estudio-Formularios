import { useState } from 'react';

import './style.css';

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

      <form onSubmit={handleSubmit} >
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' id='nombre' name='nombre' value={form.nombre} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' value={form.email} onChange={handleChange} />
        </div>

        <div className='form-group checkbox'>
          <input type='checkbox' id='aceptar' name='aceptar' checked={form.aceptar} onChange={handleChange} />
          <label htmlFor='aceptar'>Aceptar términos</label>
        </div>

        <button type='submit' className='btn-submit'>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormBasico;
