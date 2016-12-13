import { handleActions } from 'redux-actions';
import { INIT_FORM, SUBMIT_FORM, SUBMIT_FORM_START, SUBMIT_FORM_SUCCESS } from '../constants/ActionTypes';

/*
state shape:
form: {
    adviceForm: 'initial',
    enquiryForm: 'pending',
    someOtherForm: 'success'
}
 */
const defaultState = {
  form: {}
};

export default handleActions({
    [INIT_FORM]: (state, action) => ({
        ...state,
        [action.payload.formName]: 'initial'
    }),

    [SUBMIT_FORM_START]: (state, action) => ({
        ...state,
        [action.payload.formName]: 'pending'
    }),

    [SUBMIT_FORM_SUCCESS]: (state, action) => ({
        ...state,
        [action.payload.formName]: 'success'
    })

}, defaultState);
