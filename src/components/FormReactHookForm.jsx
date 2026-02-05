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
    console.log('Formulario RHF enviado:', data);
    const saludo = await getSaludo(data.nombre);

    console.log(saludo);

    reset(); // Resetear formulario
  };

  return (
    <div>
      <h2>Formulario con React Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' id='nombre' name='nombre' {...register('nombre')} />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' name='email' {...register('email')} />
        </div>

        <div className='form-group checkbox'>
          <label htmlFor='accept'>Aceptar términos:</label>
          <input type='checkbox' id='accept' name='accept' {...register('accept')} />
        </div>

        <input type='submit' value='Enviar' className='btn-submit' />
      </form>
    </div>
  );
};

export default FormReactHookForm;
