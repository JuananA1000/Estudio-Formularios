import { useState, useEffect } from 'react';
import FormBasico from './components/FormBasico';
import FormReactHookForm from './components/FormReactHookForm';
import FormFormik from './components/FormFormik';

import './App.css';
import './components/style.css';

function App() {
  const [path, setPath] = useState(window.location.pathname);

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
    <div className={`${path === '/' ? 'form-home' : 'form'}`}>
      {path === '/' && (
        <>
          <h1>Estudio de Formularios</h1>
          <button onClick={() => goTo('/form-basico')}>Formulario Básico</button>
          <button onClick={() => goTo('/form-hook-form')}>Formulario React Hook Form</button>
          <button onClick={() => goTo('/formik')}>Formulario Formik</button>
        </>
      )}

      {path === '/form-basico' && (
        <>
          <FormBasico />
          <button onClick={() => goTo('/')} className='btn-back'>Volver</button>
        </>
      )}

      {path === '/form-hook-form' && (
        <>
          <FormReactHookForm />
          <button onClick={() => goTo('/')} className='btn-back'>Volver</button>
        </>
      )}

      {path === '/formik' && (
        <>
          <FormFormik />
          <button onClick={() => goTo('/')} className='btn-back'>Volver</button>
        </>
      )}
    </div>
  );
}

export default App;
