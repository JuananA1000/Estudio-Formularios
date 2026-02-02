import { use } from 'react';
import { useForm } from 'react-hook-form';

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

  const onSubmit = (data) => {
    console.log('Formulario FORMIK enviado:', data);
    reset(); // Resetear formulario
  };

  return (
    <div>
      <h2>Formulario con React Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
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
            <input type='text' id='nombre' name='nombre' {...register('nombre')} />
          </div>

          <div style={{ display: 'flex' }}>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' name='email' {...register('email')} />
          </div>

          <div style={{ display: 'flex' }}>
            <label htmlFor='accept'>Aceptar términos:</label>
            <input type='checkbox' id='accept' name='accept' {...register('accept')} />
          </div>

          <input type='submit' value='Enviar' />
        </div>
      </form>
    </div>
  );
};

export default FormReactHookForm;
