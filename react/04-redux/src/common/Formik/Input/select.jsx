import {useField, ErrorMessage} from 'formik';
import './styles.scss';
import {useSelector} from "react-redux";

function Select({name, label, value, validate, disabled = false, mode}) {
    const [field] = useField({name, validate});
    const loading = useSelector((state) => state.users.fetchedRoles);

    let status = loading ? '' : 'Loading...';
    status = mode === 'create' ? '' : 'Loading...';

    return (
        <div className='Input'>
            <label>
                <div>{label}</div>
                <select disabled={disabled} {...field}>
                    <option>
                        {status}
                    </option>
                    {value.map((role, index) => {
                        return <option key={index}>{role}</option>;
                    })}
                </select>
            </label>

            <ErrorMessage name={name} className='error' component='div'/>
        </div>
    );
}

export default Select;