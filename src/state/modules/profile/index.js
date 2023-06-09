import { createReducer } from 'redux-create-reducer';
import callAPI from "../../../utils/callAPI";

export const REQUEST_ME = 'REQUEST_ME';
export const REQUEST_ME_SUCCESS = 'REQUEST_ME_SUCCESS';
export const REQUEST_ME_FAILURE = 'REQUEST_ME_FAILURE';

export const SET_ERROR_INFO = 'SET_ERROR_INFO';
export const SET_ERROR_CHANGE_PASSWORD = 'SET_ERROR_CHANGE_PASSWORD';

export const REQUEST_UPDATE_INFO = 'REQUEST_UPDATE_INFO';
export const REQUEST_UPDATE_INFO_SUCCESS = 'REQUEST_UPDATE_INFO_SUCCESS';
export const REQUEST_UPDATE_INFO_FAILURE = 'REQUEST_UPDATE_INFO_FAILURE';

export const REQUEST_CHANGE_PASSWORD = 'REQUEST_CHANGE_PASSWORD';
export const REQUEST_CHANGE_PASSWORD_SUCCESS = 'REQUEST_CHANGE_PASSWORD_SUCCESS';
export const REQUEST_CHANGE_PASSWORD_FAILURE = 'REQUEST_CHANGE_PASSWORD_FAILURE';

export const SET_DATA_CHANGE_PASSWORD = 'SET_DATA_CHANGE_PASSWORD';
export const SET_DATA_UPDATE_INFO = 'SET_DATA_UPDATE_INFO';

const defaultState = {
    /* Update info */
    infoUser: {},
    errorName: '',
    errorEmail: '',
    loadingBtnUpdateInfo: false,
    /* Change password */
    dataChangePassword: {
        oldPassword: '',
        newPassword: '',
        newRePassword: '',
    },
    errorOldPassword: '',
    errorNewPassword: '',
    errorNewRePassword: '',
    loadingBtnChangePassword: false,

}

const reducer = createReducer(defaultState, {
    [REQUEST_ME_SUCCESS]: (state, action) => ({
        ...state,
        infoUser: action.payload.data
    }),
    [SET_ERROR_INFO]: (state, action) => ({
        ...state,
        errorName: action.payload.name,
        errorEmail: action.payload.email,
    }),
    [SET_ERROR_CHANGE_PASSWORD]: (state, action) => ({
        ...state,
        errorOldPassword: action.payload.oldPassword,
        errorNewPassword: action.payload.newPassword,
        errorNewRePassword: action.payload.newRePassword,
    }),
    [REQUEST_UPDATE_INFO]: state => ({
        ...state,
        loadingBtnUpdateInfo: true,
    }),
    [REQUEST_UPDATE_INFO_SUCCESS]: state => ({
        ...state,
        loadingBtnUpdateInfo: false,
    }),
    [REQUEST_UPDATE_INFO_FAILURE]: state => ({
        ...state,
        loadingBtnUpdateInfo: false,
    }),
    [REQUEST_CHANGE_PASSWORD]: state => ({
        ...state,
        loadingBtnChangePassword: true,
    }),
    [REQUEST_CHANGE_PASSWORD_SUCCESS]: state => ({
        ...state,
        loadingBtnChangePassword: false,
    }),
    [REQUEST_CHANGE_PASSWORD_FAILURE]: state => ({
        ...state,
        loadingBtnChangePassword: false,
    }),
    [SET_DATA_CHANGE_PASSWORD]: (state, action) => ({
        ...state,
        dataChangePassword: action.payload
    }),
    [SET_DATA_UPDATE_INFO]: (state, action) => ({
        ...state,
        infoUser: action.payload
    }),
})

export default reducer;
export const namespace = 'profile';

/* Me */
export const handleGetMe = () => async (dispatch, getState) => {
    return await callAPI({
        method: 'get',
        apiPath: `auth/me`,
        actionTypes: [
            REQUEST_ME,
            REQUEST_ME_SUCCESS,
            REQUEST_ME_FAILURE
        ],
        dispatch,
        getState
    });
}

/* Handle update info */
export const handleSetErrorInfo = (errorInfo) => ({
   type: SET_ERROR_INFO,
   payload:  errorInfo
});

export const handleSetDataUpdateInfo = (dataUpdateInfo) => ({
    type: SET_DATA_UPDATE_INFO,
    payload:  dataUpdateInfo
});

export const updateInfoUser = (id, dataUpdateInfo) => async (dispatch, getState) => {
    return await callAPI({
        method: 'put',
        apiPath: `users/${id}`,
        actionTypes: [
            REQUEST_UPDATE_INFO,
            REQUEST_UPDATE_INFO_SUCCESS,
            REQUEST_UPDATE_INFO_FAILURE
        ],
        variables: {
          name: dataUpdateInfo.name
        },
        dispatch,
        getState
    });
}

/* Handle change password */
export const handleSetErrorChangePassword = (errorChangePassword) => ({
    type: SET_ERROR_CHANGE_PASSWORD,
    payload:  errorChangePassword
});

export const handleSetDataChangePassword = (dataChangePassword) => ({
    type: SET_DATA_CHANGE_PASSWORD,
    payload:  dataChangePassword
});

export const changePassword = (id, dataChangePassword) => async (dispatch, getState) => {
    return await callAPI({
        method: 'put',
        apiPath: `users/${id}/change-password`,
        actionTypes: [
            REQUEST_CHANGE_PASSWORD,
            REQUEST_CHANGE_PASSWORD_SUCCESS,
            REQUEST_CHANGE_PASSWORD_FAILURE
        ],
        variables: {
            oldPassword: dataChangePassword.oldPassword,
            newPassword: dataChangePassword.newPassword,
            newRePassword: dataChangePassword.newRePassword,
        },
        dispatch,
        getState
    });
}

