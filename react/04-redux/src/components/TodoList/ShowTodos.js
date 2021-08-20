import {addTodos, deleteTodos, completeTodos} from "../../Redux/todoReducer";
import TodoElement from './TodoElement';
import {connect} from "react-redux";
import './styles.css';

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (el) => dispatch(addTodos(el)),
        deleteTodo: (id) => dispatch(deleteTodos(id)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    }
}

const ShowTodos = props => {
    return (
        <div className='displayTodos'>
            <ul>
                {props.todoList.map((el) => {
                    return (
                        <TodoElement
                            key={el.id}
                            element={el}
                            deleteTodo={props.deleteTodo}
                            completeTodo={props.completeTodo}
                        />
                    );
                })}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);