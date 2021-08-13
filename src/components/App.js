import React, {useState} from 'react';
import './App.scss';
import Form from './Form';
import TodoList from './Todolist';

export default () => {
    
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

        return(
            <div className="ui container app-wrapper">
                <header>
                    <h1 className="ui header">To-Do List</h1>
                </header>
                <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} />
            </div>
        )
};