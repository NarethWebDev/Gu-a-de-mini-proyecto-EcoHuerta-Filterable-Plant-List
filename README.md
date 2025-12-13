# EcoHuerta – Preguntas de Análisis

---

## ¿Cómo se aplica el flujo de datos unidireccional en este proyecto?

En EcoHuerta los datos siempre se mueven en una sola dirección. Los componentes principales manejan la información y se la envían a los componentes hijos por medio de props. Los hijos no cambian directamente esos datos, solo los muestran o ejecutan acciones.

Cuando se necesita modificar algo, como agregar productos al carrito o cambiar el tema de la página, el componente hijo ejecuta una función que recibe del padre. El padre actualiza el estado y luego envía el nuevo valor de vuelta al hijo. Esto hace que el proyecto sea más ordenado y fácil de mantener.

---

## ¿Qué papel cumple el estado (useState) y cómo influye en el renderizado?

El estado funciona como la memoria de cada componente. Guarda información que puede cambiar mientras el usuario interactúa con la aplicación, como el modo oscuro, los productos del carrito o la visibilidad de ciertas secciones.

Cada vez que el estado cambia, React vuelve a renderizar solo la parte necesaria del componente, sin recargar toda la página. Gracias a esto, la aplicación es más rápida y los cambios se ven de forma inmediata.

---

## ¿Por qué es importante separar la UI en componentes reutilizables?

Separar la interfaz en componentes reutilizables ayuda a mantener el código limpio y organizado. Un componente se crea una sola vez y se puede usar en diferentes partes del proyecto.

Además, si se necesita hacer un cambio en ese componente, solo se modifica en un lugar y el cambio se refleja en todos lados. Esto ahorra tiempo y evita errores por código repetido.

---

## ¿Qué ventajas tiene usar JSX declarativo frente al DOM tradicional?

Con el DOM tradicional se deben dar instrucciones paso a paso para crear y modificar elementos. En cambio, con JSX solo se describe cómo debe verse la interfaz y React se encarga de actualizar el DOM automáticamente.

Esto hace que el código sea más fácil de leer, más corto y más sencillo de mantener, permitiendo enfocarse más en la lógica y menos en la manipulación directa del DOM.

---

## ¿Cómo se podría mejorar la app agregando nuevos componentes?

La aplicación se puede mejorar agregando componentes que mantengan el mismo diseño y estructura:

* **Header**: Para mostrar el nombre de la página, el logo y enlaces de navegación.
* **Hero**: Para captar la atención del usuario con un mensaje claro y una llamada a la acción.
* **Galería**: Para mostrar cultivos destacados con imágenes y descripciones.

Estos componentes pueden recibir datos por props y reutilizar los estilos de Tailwind, manteniendo la coherencia visual y la lógica del proyecto.

