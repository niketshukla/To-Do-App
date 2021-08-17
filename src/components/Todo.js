import React from 'react';

const Todo = ({ task, setTodos, todos, listTodo }) => {
    const removeTodo = () => {
        // In filter method we return true or false and if its true we keep it in new array and if its false its not in the new array
        setTodos(todos.filter((el) => {
            console.log(el.id !== listTodo.id)
            return (
                el.id !== listTodo.id
            )
        }
        ));
    };
    // const taskComplete = () => {
    //     setTodos()
    // }

    return (
        <div className="todo">
            <li className="todo-item">{task}</li>
            <button className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={removeTodo} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;