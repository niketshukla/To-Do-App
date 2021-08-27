import React, { useState,useEffect } from 'react';
import './App.scss';
import Form from './Form';
import TodoList from './Todolist';

const App = () => {
    
    // state section
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filterOption, setFilterOption] = useState("all");
    const [filterTodo, setFilterTodo] = useState([]);

    // hook section
    // useEffect(() => {
    //     getLocalTodo();
    // }, []);
    useEffect(() => {
        switchFilter();
        // saveToLocal();
    }, [todos, filterOption]);

    // function section
    const switchFilter = () => {
        switch (filterOption) {
            case "completed":
                setFilterTodo(todos.filter(todo => todo.completed === true));
                break;
            case "pending":
                setFilterTodo(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilterTodo(todos);
                break;
        }
    }

    // save to localStorage
    // const saveToLocal = () => { 
    //     localStorage.setItem('todos', JSON.stringify(todos));
    // };
    // const getLocalTodo = () => {
    //     if(localStorage.getItem('todos') === null){
    //         localStorage.setItem('todos', JSON.stringify([]));
    //     } else {
    //         let getLocalData  = JSON.parse(localStorage.getItem('todos'));
    //         setTodos(getLocalData); 
    //     }
    // };

        return(
            <div className="ui container app-wrapper">
                <header>
                    <h1 className="ui header">To-Do List</h1>
                </header>
                <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setFilterOption={setFilterOption} />
                <TodoList todos={todos} setTodos={setTodos} filterTodo={filterTodo} inputText={inputText} setInputText={setInputText} />
            </div>
        )
};

export default App;