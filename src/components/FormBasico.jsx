import { useState } from 'react';
import { getSaludo } from '../api/getSaludo';

import './style.css';

const FormBasico = () => {
  const [form, setForm] = useState({ nombre: '', email: '', aceptar: false });

  // Es una función genérica que actualiza el estado del formulario cada vez que se escribe o marca el checkbox.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Esta función maneja el envío del formulario.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const saludo = await getSaludo(form.nombre);
    console.log('Formulario BÁSICO enviado:', form);

    /**
     * Utilizamos sessionStorage aquí para compartir datos entre rutas. El saludo se genera en FormBasico, pero
     * necesita mostrarse en /saludo. sessionStorage permite pasar datos sin props o estado global
     */
    try {
      sessionStorage.setItem('saludo', saludo);
    } catch (err) {
      console.warn('No se pudo guardar el saludo en sessionStorage', err);
    }

    // Reiniciar el formulario
    setForm({ nombre: '', email: '', aceptar: false });

    // Navegar a la ruta /saludo
    window.history.pushState({}, '', '/saludo');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div>
      <h2>Formulario Básico</h2>

      <form onSubmit={handleSubmit}>
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
