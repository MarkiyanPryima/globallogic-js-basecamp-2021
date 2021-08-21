import {Formik, Form} from 'formik';

import Input from '../../../../common/Formik/Input/input';
import Select from '../../../../common/Formik/Input/select';
import {MODE} from '../../../../constants';
import {ROLE, USERNAME, AGE} from '../../constants';
import Buttons from './Buttons';

function FormContainer({initialValues, onSubmit, mode, roles}) {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <Input name={USERNAME}
                       label='Username'
                       disabled={mode === MODE.VIEW || mode === MODE.DELETE}
                       validate={value => {
                           if (!value) return `Field is required`;
                       }}/>

                <Select mode={mode} name={ROLE}
                        label={'Role'}
                        value={roles}
                        disabled={mode === MODE.VIEW || mode === MODE.DELETE}
                        validate={value => {
                            if (!value) return `Field is required`;
                        }}/>

                <Input name={AGE}
                       label='Age'
                       type={'number'}
                       disabled={mode === MODE.VIEW || mode === MODE.DELETE}
                       validate={value => {
                           if (!value) return `Field is required`;
                           if (Number(value) < 16 || Number(value) > 110) return `Allowed age: from 16 to 110`;
                       }}
                />

                <br/>

                <Buttons mode={mode}/>
            </Form>
        </Formik>
    );
}

export default FormContainer;
