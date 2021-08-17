import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    
    const todoListItems = todos.map((listTodo) => {
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