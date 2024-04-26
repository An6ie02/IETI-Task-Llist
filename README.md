# ToDO App

Se crean los siguientes componentes:

+ `Header`: En este componente se debe visualizar el título de la aplicación.
+ `TaskList`: En este componente debe visualizarse la lista completa de tareas.
+ `Task`: Este componente mostrará el nombre, y un indicador del estado de cada tarea. (ej: checkbox, iconos, tachado...)

El resultado final se muestra en la siguiente imagen:

![Result](https://github.com/An6ie02/IETI-Task-Llist/assets/100453879/14a5b813-c6d2-4dab-9c24-1e41d422434e)

## Parte 2:
Cada tarea debe contar con:
+ **Agregar Tareas:** Implementa una función que permita agregar tareas al listado. Cada tarea debe tener un título, descripción y un estado de completada o pendiente. Utiliza valores booleanos para el estado.
+ **Eliminar Tareas:** Implementa una función que permita eliminar una tarea.
+ **Editar Tareas:** Implementa una función que permita modificar el título y descripción de una tarea existente.

![TaskList](https://github.com/An6ie02/IETI-Task-Llist/assets/100453879/19d99554-335f-4071-9a0a-38f32aa6817c)\
La funcionalidad para editar tarea se implemeto de tal forma que al dar click en el boton de editar se muestra en los campos de texto el titulo y la descripcion de la tarea seleccionada, luego de editar los campos se da click en el boton de `Update Task` y se actualiza la tarea.

![Update](https://github.com/An6ie02/IETI-Task-Llist/assets/100453879/0b9d479e-fc59-41f7-81a0-3ff0b508eb38)

## Parte 3:

Crear el propio hook personalizado para mejorar el código, hacerlo más limpio y organizado. El hook debe retornar 3 funciones para:
+ Crear tareas
+ Borrar tareas
+ Actualizar tareas

Las funcionalidades se siguen manteniendo, pero ahora se implementa el hook personalizado para mejorar el código.

## Parte 4:
+ Incluye en tu aplicación un formulario para que el usuario pueda guardar el nombre de la tarea y una descripción.
+ Crea una validación para este formulario teniendo en cuenta que no se puedan guardar tareas en las cuales el nombre tenga menos de 3 caracteres y la descripción no debe ser obligatoria.

Se implementan las validaciones en el formulario de tal forma que no se pueda guardar una tarea si el nombre tiene menos de 3 caracteres o si la descripcion esta vacia. En casos de error se muestra un mensaje de error y el boton de añadir o editar se deshabilita.

![Validation](https://github.com/An6ie02/IETI-Task-Llist/assets/100453879/3c05a6de-6fcc-43c1-9bc7-4e97cbd6dd00)

## Parte 5:
+ Crear un componente Menu con los siguientes links:
    - Home
    - Tareas
    - Sobre Nosotros
+ Utiliza React router para permitir que el usuario navegue entre las diferentes rutas de tu aplicación.

Se crea el componente `Menu` que contiene los links a las diferentes rutas de la aplicacion, se implementa `react-router-dom` para la navegacion entre las rutas. Se hace que la carga de la aplicacion sea mas rapida utilizando `React.lazy` y `Suspense`.

![home](https://github.com/An6ie02/IETI-Task-Llist/assets/100453879/37f999dc-9696-4fba-874b-13091a52738a)\
![about](https://github.com/An6ie02/IETI-Task-Llist/assets/100453879/dd27ce9b-6e2c-402e-8069-634612ff394d)\
![tasks](https://github.com/An6ie02/IETI-Task-Llist/assets/100453879/8eb899d2-38d5-4b0f-aaad-0c7bb1f3878e)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
