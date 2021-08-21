import {deleteTodos, completeTodos} from "../../Redux/todoReducer";
import TodoElement from './TodoElement';
import {connect} from "react-redux";
import './styles.css';

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (id) => dispatch(deleteTodos(id)),
        completeTodo: (id) => dispatch(completeTodos(id))
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList,
    };
};

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