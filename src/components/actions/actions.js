import * as actionTypes from './actionTypes';

export const loginUser = (email, password) => (dispatch, getState, { api }) => {
    dispatch({ type: actionTypes.FETCHING_USER })
    const data = {
        email: email,
        pwd: password
    };
    return api.post('users/login', data)
        .then(data => {
            dispatch({ type: actionTypes.FETCH_USER_SUCCESS, data: data})
            console.log(data);
            return data;
        })
        .catch(() => dispatch({ type: actionTypes.FETCH_USER_ERROR }))
};