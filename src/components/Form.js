import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {

    const inputHandler = (e) => {
        setInputText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {task: inputText, completed: false, id: Math.floor(Math.random() * 1000)}
        ]);
        setInputText("");
    }


    return (
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={inputHandler} />
            <button type="submit" className="todo-btn" onClick={onSubmit} >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
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