# EcoHuerta 

## ¿Cómo se aplica el flujo de datos unidireccional en este proyecto?

En el proyecto EcoHuerta el flujo de datos se maneja de forma unidireccional, es decir, la información siempre va del componente padre hacia los componentes hijos mediante props. Los componentes hijos no modifican directamente los datos, únicamente los usan para mostrarlos o para ejecutar acciones.

Cuando se necesita cambiar algo, como mostrar los cultivos o los consejos de cultivo, el componente hijo ejecuta una función que recibe del componente padre. El padre actualiza el estado y luego vuelve a enviar los datos actualizados al hijo. De esta forma los datos bajan y las acciones suben, lo que hace que la aplicación sea más ordenada y fácil de entender.

---

## ¿Qué papel cumple el estado (useState) en los diferentes componentes y cómo influye en el renderizado?

El estado (`useState`) funciona como una memoria interna de cada componente. Se usa para guardar información que puede cambiar según la interacción del usuario, por ejemplo, si se deben mostrar los cultivos, si se deben mostrar los consejos o el valor de un contador.

Cada vez que el estado cambia, React vuelve a renderizar únicamente el componente afectado, sin recargar toda la página. Esto hace que la aplicación sea más rápida y que los cambios se reflejen inmediatamente en la interfaz.

---

## ¿Por qué es importante separar la UI en componentes reutilizables?

Separar la interfaz en componentes reutilizables permite tener un código más limpio y organizado. Un componente se crea una sola vez y se puede usar en diferentes partes de la aplicación sin repetir código.

Además, si se necesita hacer un cambio en un componente, solo se modifica en un lugar y ese cambio se aplica en todas las partes donde se utiliza. Esto facilita el mantenimiento del proyecto y reduce errores.

---

## ¿Qué ventajas aporta el uso de JSX declarativo frente al enfoque imperativo del DOM tradicional?

Con el enfoque imperativo del DOM tradicional, el desarrollador debe indicar paso a paso qué elementos crear y cómo modificarlos. En cambio, con JSX se describe directamente cómo debe verse la interfaz y React se encarga de actualizar el DOM automáticamente.

Esto hace que el código sea más corto, más fácil de leer y más sencillo de mantener, permitiendo enfocarse en la lógica de la aplicación y no en la manipulación manual del DOM.

---

## ¿Cómo se mejoró la app agregando nuevos componentes?

La aplicación se mejoró agregando tres componentes nuevos que mantienen la coherencia visual y la lógica del proyecto:

### Hero

El componente **Hero** es la primera sección que ve el usuario. Su función es llamar la atención con un título claro, una imagen de fondo y botones de acción. A través de eventos `onClick`, permite mostrar los cultivos o los consejos de cultivo, comunicándose con el componente padre mediante props.

### CropTips

El componente **CropTips** muestra consejos básicos sobre el cuidado de los cultivos. Su objetivo es educativo y complementa la información de las tarjetas. Se muestra u oculta según el estado controlado desde el componente principal.

### Footer

El componente **Footer** cierra la página mostrando información de contacto de EcoHuerta. Es un componente simple y reutilizable que aporta orden y coherencia visual, sin manejar estado, solo presentando información clara al usuario.

