import React from 'react';

const TodoElement = ({element, deleteTodo, completeTodo}) => {

    return (
        <li key={element.id} className='todoEl'>
            <h3>{element.item}</h3>
            <div>
                {!element.completed ? (
                    <button className='btn1' onClick={() => completeTodo(element.id)}>Done</button>) : null}
                <button className='btn2' onClick={() => deleteTodo(element.id)}>Delete</button>
            </div>
            {element.completed ? <span className='done'>✅</span> : null}
        </li>
    )
};

export default TodoElement;