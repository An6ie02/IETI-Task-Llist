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

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
