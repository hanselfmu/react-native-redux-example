import { createAction } from 'redux-actions';
import { INIT_FORM, SUBMIT_FORM, SUBMIT_FORM_START, SUBMIT_FORM_SUCCESS } from '../constants/ActionTypes';

import api from '../services/api';

export const initForm = createAction(INIT_FORM);

export const submitFormStart = createAction(SUBMIT_FORM_START);

export const submitFormSuccess = createAction(SUBMIT_FORM_SUCCESS);

export const submitForm = createAction(SUBMIT_FORM, (formName, formData) => {
    return dispatch => {
        dispatch(submitFormStart({formName}));

        api.saveQuestion(formData).then(res => {
            dispatch(submitFormSuccess({formName}));
        });
    }
});
