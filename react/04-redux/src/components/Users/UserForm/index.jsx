import {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getUser, deleteUser, editUser, createUser, fetchRoles, fetchUsers} from "../../../Redux/usersReducer";

import {MODE} from '../../../constants';
import {ID} from '../constants';
import FormContainer from './FormContainer';
import {getInitialValues, getRequestPayload} from './converter';
import Loading from "../../Loading";

function UserForm() {

    const {mode, id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.users.list).find((user) => user.id === Number(id));
    const roles = useSelector((state) => state.users.roles);
    const loading = useSelector((state) => state.users.fetchedUsers);
    const rolesFetched = useSelector((state) => state.users.fetchedRoles);

    let className = loading ? 'hide' : 'show';

    useEffect(() => {
        if (mode === MODE.VIEW || mode === MODE.EDIT) {
            if (!currentUser) dispatch(getUser(id));
        }

        if (!loading) dispatch(fetchUsers());
    }, [dispatch, currentUser, mode, id, loading]);

    useEffect(() => {
        if (mode) {
            if (!rolesFetched) {
                dispatch(fetchRoles());
            }
        }
    }, [mode, dispatch, rolesFetched]);


    const handleSubmit = async values => {
        try {
            const payload = getRequestPayload(values);

            switch (mode) {
                case MODE.CREATE:
                    await dispatch(createUser(payload));
                    break;
                case MODE.EDIT:
                    await dispatch(editUser(payload));
                    break;
                case MODE.CLONE:
                    await dispatch(createUser(payload));
                    break;
                case MODE.DELETE:
                    await dispatch(deleteUser(payload));
                    break;
                default:
                    console.error(`Failed to execute this request for ${mode} mode`);
            }
        } catch (err) {
            window.alert(err.message);
        }

        history.push('/users');
    };

    const initialValues = getInitialValues(currentUser);

    return (
        <>
            <FormContainer
                key={`${mode}:${initialValues[ID]}`}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                mode={mode}
                roles={roles}
            />
            <div className={className}>
                <Loading/>
            </div>
        </>
    );
}

export default UserForm;
