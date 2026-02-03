import { useState, useEffect } from 'react';
import FormBasico from './components/FormBasico';
import FormReactHookForm from './components/FormReactHookForm';
import FormFormik from './components/FormFormik';

import './App.css';

function App() {
  const [route, setRoute] = useState('home');
  const [path, setPath] = useState(window.location.pathname);

  const goTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  // const renderComponent = () => {
  //   switch (path) {
  //     case 'form-basico':
  //       return <FormBasico />;
  //     case 'form-hook-form':
  //       return <FormReactHookForm />;
  //     case 'formik':
  //       return <FormFormik />;
  //     default:
  //       return null;
  //   }
  // };

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
    <>
      <h1>Estudio Básico de Formularios</h1>
      <button onClick={() => goTo('/form-basico')}>Formulario Básico</button>
      <button onClick={() => goTo('/form-hook-form')}>Formulario React Hook Form</button>
      <button onClick={() => goTo('/formik')}>Formulario Formik</button>
      <button onClick={() => goTo('/')}>Home</button>

      {/* {renderComponent()} */}

        {path === "/form-basico" && <FormBasico />}
      {path === "/form-hook-form" && <FormReactHookForm />}
      {path === "/formik" && <FormFormik />}
    </>
  );
}

export default App;
