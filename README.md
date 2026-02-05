# Estudio de Formularios en React

En este proyecto creado con React estudiaremos y compararemos distintas formas de creación de formularios.
El enfoque principal es entender cómo cambia la experiencia de desarrollo al utilizar librerías especializadas frente a una implementación manual, sin dependencias externas.

## Objetivo del proyecto

Se trata de un ejercicio práctico para:

- Comprender los conceptos básicos detrás de la gestión de formularios.
- Comparar la utilidad y escalabilidad de distintas herramientas.

## Enfoques estudiados

Implementaremos el mismo formulario utilizando **tres enfoques diferentes**:

### 1. Formularios sin librerías externas

Implementación manual utilizando únicamente `useState()` y los eventos `onChange` y `onSubmit`.
Esto permite entender cómo funciona React "por debajo".

### 2. React Hook Form

Uso de la librería React Hook Form, centrada en:

- Formularios no controlados
- Mejor rendimiento
- Menor cantidad de código repetitivo

Es una solución moderna y muy utilizada en proyectos reales.

### 3. Formik

Uso de Formik, una librería más clásica y ampliamente conocida, que ofrece:

- Gestión explícita del estado del formulario
- Validaciones estructuradas
- Buen soporte para formularios complejos

Permite comparar un enfoque más declarativo frente a React Hook Form.

## Comparación y aprendizajes

A lo largo del proyecto se pueden observar diferencias claras entre los enfoques, especialmente en:

- Cantidad de código necesario
- Claridad y legibilidad
- Facilidad para añadir validaciones
- Mantenimiento a largo plazo

Este estudio ayuda a tomar mejores decisiones técnicas según el tipo de proyecto y complejidad.

## Conclusión

La elección de una herramienta u otra depende del contexto del proyecto, su tamaño y las necesidades del equipo.

Este repositorio sirve como referencia práctica para entender las ventajas y desventajas de cada enfoque.
