import { useState, useEffect } from 'react';

import FormBasico from './components/FormBasico';
import FormReactHookForm from './components/FormReactHookForm';
import FormFormik from './components/FormFormik';
import FormFormikYup from './components/FormFormikYup';
import FormFormikMUI from './components/FormFormikMUI';

import './App.css';
import './components/style.css';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  const saludo = typeof window !== 'undefined' ? sessionStorage.getItem('saludo') || '' : '';

  const goTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return (
    <div className={`${path === '/' ? 'form-home' : path === '/saludo' ? 'saludo-page' : 'form'}`}>
      {path === '/' && (
        <>
          <h1>Estudio de Formularios</h1>
          <div className='btn-group'>
            <button className='btn-form' onClick={() => goTo('/form-basico')}>
              Formulario Básico
            </button>
            <button className='btn-form' onClick={() => goTo('/form-hook-form')}>
              Formulario React Hook Form
            </button>
            <button className='btn-form' onClick={() => goTo('/formik')}>
              Formulario Formik
            </button>
            <button className='btn-form' onClick={() => goTo('/formik-yup')}>
              Formulario Formik con Yup
            </button>
            <button className='btn-form' onClick={() => goTo('/formik-mui')}>
              Formulario Formik con Material UI
            </button>
          </div>
        </>
      )}

      {path === '/form-basico' && (
        <>
          <FormBasico />
          <button onClick={() => goTo('/')} className='btn-back'>
            Volver
          </button>
        </>
      )}

      {path === '/saludo' && (
        <>
          <h2>{saludo}</h2>
          <button onClick={() => goTo('/')} className='btn-back'>
            Volver
          </button>
        </>
      )}

      {path === '/form-hook-form' && (
        <>
          <FormReactHookForm />
          <button onClick={() => goTo('/')} className='btn-back'>
            Volver
          </button>
        </>
      )}

      {path === '/formik' && (
        <>
          <FormFormik />
          <button onClick={() => goTo('/')} className='btn-back'>
            Volver
          </button>
        </>
      )}

      {path === '/formik-yup' && (
        <>
          <FormFormikYup />
          <button onClick={() => goTo('/')} className='btn-back'>
            Volver
          </button>
        </>
      )}

      {path === '/formik-mui' && (
        <>
          <FormFormikMUI />
          <button onClick={() => goTo('/')} className='btn-back'>
            Volver
          </button>
        </>
      )}
    </div>
  );
}

export default App;
