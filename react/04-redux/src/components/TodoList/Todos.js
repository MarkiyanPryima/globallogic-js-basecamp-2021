import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodos} from "../../Redux/todoReducer";
import {nanoid} from '@reduxjs/toolkit';

const mapStateToProps = state => {
    return {
        todos: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: el => dispatch(addTodos(el))
    };
};

const Todos = (props) => {

    const [todo, setTodo] = useState('');

    const handleInput = (e) => {
        setTodo(e.target.value);
    }

    const addTodoElement = () => {
        if (!todo) {
            alert('Todo is empty');
        } else {
            props.addTodo({
                id: nanoid(),
                completed: false,
                item: todo
            });
            setTodo('');
        }
    };

    return (
        <div className='addTodos'>
            <input type='text' placeholder='Todos' value={todo} onChange={e => handleInput(e)}/>
            <button id='add' onClick={() => addTodoElement()}>Add</button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);