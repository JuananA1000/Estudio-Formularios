export const getSaludo = async (nombre) => {
  try {
    const respuesta = await fetch(`https://api.genderize.io?name=${nombre}`);
    const datos = await respuesta.json();

    if (datos.gender) {
      if (datos.gender === 'female') {
        datos.saludo = `¡Bienvenida ${nombre}!`;
      }

      if (datos.gender === 'male') {
        datos.saludo = `¡Bienvenido ${nombre}!`;
      }
    } else {
      datos.saludo = `¡Bienvenide, RARITO! Te llamabas ${nombre} no?`;
    }

    return datos.saludo;
  } catch (error) {
    console.error('Error al obtener el saludo:', error);
  }
};
