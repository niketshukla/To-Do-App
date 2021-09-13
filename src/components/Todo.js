import React, { useState } from 'react';

const Todo = ({ task, setTodos, todos, listTodo }) => {

    // state section
    const [ editTodoId, setEditTodoId ] = useState(null);
    const [ editText, setEditText ] = useState('');

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

    const taskComplete = () => {
        setTodos(todos.map((item) => {
            if (item.id === listTodo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    };

    const updateText = () => {
        setEditTodoId(listTodo.id);
        setEditText(listTodo.task);
        // document.getElementById("edit-text").focus();
    }
    const addNewTodo = (e) => {
        // e.preventDefault();
    
        setTodos(todos.map((item) => {
            if (item.id === listTodo.id){
                listTodo.task = editText
            }
            return item;
        }));
        console.log(listTodo.task);
        setEditTodoId(null);
        setEditText('');
    }


    return (
        <div className="todo">
            { editTodoId === listTodo.id ? ( <input type="text" id='edit-text' className="todo-item" value={editText} onChange={(e) => setEditText(e.target.value)} /> ) : ( <li onClick={updateText} className={`todo-item ${listTodo.completed ? "completed" : ""}`}>{task}</li> )}
            
            { editTodoId === listTodo.id ? ( <button type="submit" onClick={addNewTodo} className="edit-btn"><i className="fas fa-edit"></i></button> ) : ( <div><button onClick={taskComplete} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={removeTodo} className="trash-btn"><i className="fas fa-trash"></i></button></div> )}
        </div>
    );
}

export default Todo;