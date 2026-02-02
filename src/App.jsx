import { useState } from 'react';
import FormBasico from './components/FormBasico';
import FormReactHookForm from './components/FormReactHookForm';
import FormFormik from './components/FormFormik';

import './App.css';

function App() {
  const [route, setRoute] = useState('home');

  const renderComponent = () => {
    switch(route) {
      case 'form-basico':
        return <FormBasico />;
      case 'form-hook-form':
        return <FormReactHookForm />;
      case 'formik':
        return <FormFormik />;
      default:
        return null;
    }
  };

  return (
    <>
      <h1>Estudio Básico de Formularios</h1>
      <button onClick={() => setRoute('form-basico')}>Formulario Básico</button>
      <button onClick={() => setRoute('form-hook-form')}>Formulario React Hook Form</button>
      <button onClick={() => setRoute('formik')}>Formulario Formik</button>
      
      {renderComponent()}
    </>
  );
}

export default App;
