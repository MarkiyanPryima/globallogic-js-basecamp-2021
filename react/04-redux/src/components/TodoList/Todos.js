import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodos} from "../../Redux/todoReducer";
import {nanoid} from '@reduxjs/toolkit';

const mapDispatchToProps = dispatch => {
    return {
        addTodo: el => dispatch(addTodos(el))
    };
};

const mapStateToProps = state => {
    return {
        todos: state.todoList
    };
};

const Todos = (props) => {

    const [element, setElement] = useState('');

    const handleInput = (event) => {
        setElement(event.target.value);
    }

    const addTodoElement = () => {
        !element.trim() ? alert('Todo is empty') : props.addTodo({id: nanoid(), completed: false, item: element});
        setElement('');
    };

    return (
        <div className='addTodos'>
            <input type='text' placeholder='Todos' value={element} onChange={event => handleInput(event)}/>
            <button id='add' onClick={() => addTodoElement()}>Add</button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);