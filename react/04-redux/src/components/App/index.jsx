import {Switch, Redirect, Route, Link} from 'react-router-dom';

import Users from '../Users';
import NotFound from '../Not found/notFound';
import Todos from "../TodoList/Todos";
import DisplayTodos from "../TodoList/ShowTodos";
import './app.css';
import {useHistory} from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <div className={'bar'}>

                <ul className='nav'>
                    <li><Link to='/users'>Users</Link></li>
                    <li><Link to='/todoList'>ToDoList</Link></li>
                </ul>
            </div>

            <Switch>

                <Redirect exact from='/' to='/users' />
                <Route path='/users'>
                    <Users/>
                </Route>

                <Route path='/todoList'>
                    <Todos/>
                    <DisplayTodos/>
                </Route>

                <NotFound/>
            </Switch>
        </div>
    );
}

export default App;
