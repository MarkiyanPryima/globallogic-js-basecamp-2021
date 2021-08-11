import { useHistory } from 'react-router-dom';
import { useFormikContext } from 'formik';

import { MODE } from '../../../../../constants';

function Buttons({ mode }) {
  const history = useHistory();
  const { isSubmitting } = useFormikContext();

  return (
    <div>
      {(mode === MODE.CREATE || mode === MODE.EDIT || mode === MODE.CLONE) && (
        <button type='submit' disabled={isSubmitting}>
          Save
        </button>
      )}

      {(mode === MODE.DELETE) && (
        <button type='submit' disabled={isSubmitting}>
          Delete
        </button>
      )}

      <button type='button' onClick={() => history.push('/cities')}>
        Cancel
      </button>
    </div>
  );
}

export default Buttons;
