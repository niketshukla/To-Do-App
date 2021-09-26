import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterTodo }) => {
    console.log(todos);
    const todoListItems = filterTodo.map((listTodo) => {
        console.log(listTodo);
        return (
            <Todo todos={todos} setTodos={setTodos} listTodo={listTodo} task={listTodo.task} key={listTodo.id} />
        );
    });
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todoListItems}
            </ul>
        </div>
    );
};

export default TodoList;