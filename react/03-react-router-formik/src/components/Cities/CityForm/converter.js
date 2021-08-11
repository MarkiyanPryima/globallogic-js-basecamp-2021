import { INITIAL_STATE } from '../constants';

export const getInitialValues = city => (city ? city : INITIAL_STATE);

export const getRequestPayload = values => values;
