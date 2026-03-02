import { Box, Button, Checkbox, FormControlLabel, FormHelperText, TextField, Typography } from '@mui/material';

import { useFormik } from 'formik';
import { getSaludo } from '../api/getSaludo';
import * as Yup from 'yup';

import './style.css';

const validacionYUP = Yup.object().shape({
  nombre: Yup.string().required('El nombre es obligatorio'),
  accept: Yup.boolean().oneOf([true], 'Debes aceptar los términos'),
});

export default function FormFormikMUI() {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      accept: false,
    },

    validationSchema: validacionYUP,

    onSubmit: async (values) => {
      const saludo = await getSaludo(values.nombre);

      try {
        sessionStorage.setItem('saludo', saludo);
      } catch (error) {
        console.warn('No se pudo guardar el saludo en sessionStorage', error);
      }

      window.history.pushState({}, '', '/saludo');
      window.dispatchEvent(new PopStateEvent('popstate'));
      formik.resetForm();
    },
  });

  return (
    <div>
      <Typography variant='h2' component='h2' sx={{ fontSize: '1.5em' }} gutterBottom>
        Formulario con Formik y Material UI
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Nombre */}
          <TextField
            label='Nombre'
            id='nombre'
            name='nombre'
            value={formik.values.nombre}
            onChange={formik.handleChange}
            error={formik.touched.nombre && Boolean(formik.errors.nombre)}
            helperText={formik.touched.nombre && formik.errors.nombre}
          />

          {/* Email */}
          <TextField
            label='Email'
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          {/* Aceptar términos */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControlLabel
              control={
                <Checkbox id='accept' name='accept' checked={formik.values.accept} onChange={formik.handleChange} />
              }
              label='Aceptar términos'
            />
            {formik.touched.accept && formik.errors.accept && (
              <FormHelperText error>{formik.errors.accept}</FormHelperText>
            )}
          </Box>

          {/* Submit */}
          <Button type='submit' variant='contained' color='primary'>
            Enviar
          </Button>
        </Box>
      </form>
    </div>
  );
}
