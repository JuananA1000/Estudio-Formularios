import { useForm } from 'react-hook-form';

import { getSaludo } from '../api/getSaludo';

import './style.css';

const FormReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      accept: false,
    },
  });

  const onSubmit = async (data) => {
    const saludo = await getSaludo(data.nombre);

    try {
      sessionStorage.setItem('saludo', saludo);
    } catch (error) {
      console.warn('No se pudo guardar el saludo en sessionStorage', error);
    }

    window.history.pushState({}, '', '/saludo');
    window.dispatchEvent(new PopStateEvent('popstate'));

    reset(); // Resetear formulario

    console.log('Formulario RHF enviado:', data);
  };

  return (
    <div>
      <h2>Formulario con React Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' id='nombre' name='nombre' {...register('nombre', { required: true })} />
          {errors.nombre && <span className='error'>El nombre es obligatorio</span>}
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' name='email' {...register('email')} />
        </div>

        <div className='form-group checkbox'>
          <label htmlFor='accept'>Aceptar términos:</label>
          <input type='checkbox' id='accept' name='accept' {...register('accept', { required: true })} />
          {errors.accept && <span className='error'>Debes aceptar los términos</span>}
        </div>

        <input type='submit' value='Enviar' className='btn-submit' />
      </form>
    </div>
  );
};

export default FormReactHookForm;
