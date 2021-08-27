import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setFilterOption }) => {

    const inputHandler = (e) => {
        setInputText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // Created object using setTodos consisting of all todo items
        setTodos([
            ...todos, 
            {task: inputText, completed: false, id: Math.floor(Math.random() * 1000)}
        ]);
        // setting input text to empty after submit
        setInputText("");
    }
    const filterOptionHandler = (e) => {
        setFilterOption(e.target.value);
    }


    return (
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={inputHandler} />
            <button type="submit" className="todo-btn" onClick={onSubmit} >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select" onChange={filterOptionHandler} >
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </form>
    );
}

export default Form;