import { createReducer } from 'redux-create-reducer';
import callAPI from "../../../utils/callAPI";

export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const REQUEST_REGISTER_SUCCESS = 'REQUEST_REGISTER_SUCCESS';
export const REQUEST_REGISTER_FAILURE = 'REQUEST_REGISTER_FAILURE';
export const SET_ERROR_REGISTER = 'SET_ERROR_REGISTER';
export const SET_FLAG_STATUS_REGISTER = 'SET_FLAG_STATUS_REGISTER';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS';
export const REQUEST_LOGIN_FAILURE = 'REQUEST_LOGIN_FAILURE';

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const REQUEST_LOGOUT_SUCCESS = 'REQUEST_LOGOUT_SUCCESS';
export const REQUEST_LOGOUT_FAILURE = 'REQUEST_LOGOUT_FAILURE';

const defaultState = {
    // Register - start
    loadingBtnRegister: false,
    formRegister: {
        name: '',
        phone: '',
        password: '',
        confirmPassword: ''
    },
    errorRegister: {
        name: '',
        phone: '',
        password: '',
        confirmPassword: ''
    },
    flagStatusRegister: '',
    // Register - end
    /* Login */
    loadingBtnLogin: false
};

const reducer = createReducer(defaultState, {
    [REQUEST_REGISTER]: state => ({
        ...state,
        loadingBtnRegister: true
    }),
    [REQUEST_REGISTER_SUCCESS]: (state) => ({
        ...state,
        loadingBtnRegister: false,
        flagStatusRegister: 'success',
    }),
    [REQUEST_REGISTER_FAILURE]: (state) => ({
        ...state,
        loadingBtnRegister: false,
        flagStatusRegister: 'error',
    }),
    [SET_ERROR_REGISTER]: (state, action) => ({
        ...state,
        errorRegister: action.payload
    }),
    [SET_FLAG_STATUS_REGISTER]: (state, action) => ({
        ...state,
        flagStatusRegister: action.payload,
    }),
    [REQUEST_LOGIN]: state => ({
        ...state,
        loadingBtnLogin: true
    }),
    [REQUEST_LOGIN_SUCCESS]: state => ({
        ...state,
        loadingBtnLogin: false
    }),
    [REQUEST_LOGIN_FAILURE]: state => ({
        ...state,
        loadingBtnLogin: false
    }),
});

export default reducer;
export const namespace = 'auth';

/* Register */
export const setErrorRegister = (error) => ({
    type: SET_ERROR_REGISTER,
    payload: error
})

export const setFlagStatusRegister = (error) => ({
    type: SET_FLAG_STATUS_REGISTER,
    payload: error
})

export const handleRegister = (formData) => async (dispatch, getState) => {
    return await callAPI({
        method: 'post',
        apiPath: `auth/register`,
        actionTypes: [
            REQUEST_REGISTER,
            REQUEST_REGISTER_SUCCESS,
            REQUEST_REGISTER_FAILURE
        ],
        variables: {
            name: formData.name,
            phone: formData.phone,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
        },
        dispatch,
        getState
    });
}

/* Login */
export const setLoadingButtonLogin = () => ({
   type: REQUEST_LOGIN
});

export const handleLogin = (email, password) => async (dispatch, getState) => {
    return await callAPI({
        method: 'post',
        apiPath: `auth/login`,
        actionTypes: [
            REQUEST_LOGIN,
            REQUEST_LOGIN_SUCCESS,
            REQUEST_LOGIN_FAILURE
        ],
        variables: {
            email: email,
            password: password
        },
        dispatch,
        getState
    });
}

/* Logout */
export const handleLogout = () => async (dispatch, getState) => {
    return await callAPI({
        method: 'post',
        apiPath: `auth/logout`,
        actionTypes: [
            REQUEST_LOGOUT,
            REQUEST_LOGOUT_SUCCESS,
            REQUEST_LOGOUT_FAILURE
        ],
        dispatch,
        getState
    });
}

