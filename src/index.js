import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => {
    crearTodoHtml( todo );
});

todoList.todos.forEach(todo => {
    todo.imprimirClase();
});

// const tarea = new Todo('aprender js');

// todoList.nuevoTodo(tarea);
// console.log(todoList);


// localStorage.setItem('mi-key', 'ABC213');
// sessionStorage.setItem('mi-key', 'ABC213');

// setTimeout(() => {
//     localStorage.removeItem('mi-key')
// }, 1500);

