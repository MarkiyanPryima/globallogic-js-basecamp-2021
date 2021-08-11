import { Formik, Form } from 'formik';

import Input from '../../../../common/Formik/Input/input';
import Select from '../../../../common/Formik/Input/select';
import { MODE } from '../../../../constants';
import { STATUS, NAME, AGE } from '../../constants';
import Buttons from './Buttons';

function FormContainer({ initialValues, onSubmit, mode, statuses }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Input name={NAME}
               label='Name'
               disabled={mode === MODE.VIEW || mode === MODE.DELETE}
               validate={value => {
                 if (!value) return `Field is required`;
               }} />

        <Select name={STATUS}
                label={'Status'}
                value={statuses}
                disabled={mode === MODE.VIEW || mode === MODE.DELETE}
                validate={value => {
                  if (!value) return `Field is required`;
                }} />

        <Input name={AGE}
               label='Age'
               type={'number'}
               disabled={mode === MODE.VIEW || mode === MODE.DELETE}
               validate={value => {
                 if (!value) return `Field is required`;
                 if (Number(value) < 0) return `Age can't be less than 0`;
               }}
        />

        <br />

        <Buttons mode={mode} />
      </Form>
    </Formik>
  );
}

export default FormContainer;
