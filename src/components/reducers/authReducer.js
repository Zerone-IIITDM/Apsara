import * as actionTypes from '../actions/actionTypes';
import * as dotProp from 'dot-prop-immutable';

const initialState = {
    auth: null,
    userLoading: null
};

const authReducer = (state = initialState, action) => {
    let rState = state;
    switch (action.type) {
        case actionTypes.FETCHING_USER:
            rState = dotProp.set(rState, `userLoading`, 1)
            return rState

        case actionTypes.FETCH_USER_SUCCESS:
            rState = dotProp.set(rState, `userLoading`, 2)
            rState = dotProp.set(rState, `auth`, action.data)
            return rState

        case actionTypes.FETCH_USER_ERROR:
            rState = dotProp.set(rState, `userLoading`, 0)
            return rState;

        default:
            return state;
    }
};

export default authReducer;