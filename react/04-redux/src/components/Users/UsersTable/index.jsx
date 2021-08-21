import {useEffect} from 'react';
import {useRouteMatch, Link} from 'react-router-dom';

import {MODE} from '../../../constants';
import {ID, USERNAME, ROLE, TIMESTAMP, AGE} from '../constants';
import Actions from './Actions';
import './index.scss';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {fetchUsers} from "../../../Redux/usersReducer";
import Loading from "../../Loading";

function UsersTable() {
    const {url} = useRouteMatch();

    const loading = useSelector((state) => state.users.fetchedUsers);
    const users = useSelector((state) => state.users.list);

    const dispatch = useDispatch();

    let className = loading ? 'hide' : 'show';

    useEffect(() => {
        if (!loading) dispatch(fetchUsers());
    }, [loading, dispatch]);

    return (
        <div className='UsersTable'>
            <Link to={`${url}/user/${MODE.CREATE}`}>Create User </Link>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Age</th>
                    <th>Last Updated At</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user[ID]}>
                        <td>{user[ID]}</td>
                        <td>{user[USERNAME]}</td>
                        <td>{user[ROLE]}</td>
                        <td>{user[AGE]}</td>
                        <td>{user[TIMESTAMP]}</td>
                        <td>
                            <Actions id={user[ID]}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className={className}>
                <Loading/>
            </div>
        </div>
    );
}

export default UsersTable;
