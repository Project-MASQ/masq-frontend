import { createReducer } from 'redux-create-reducer';
import callAPI from "../../../utils/callAPI";

export const REQUEST_CREATE_EMPLOY = "REQUEST_CREATE_EMPLOY";
export const REQUEST_CREATE_EMPLOY_SUCCESS = "REQUEST_CREATE_EMPLOY_SUCCESS";
export const REQUEST_CREATE_EMPLOY_FAILURE = "REQUEST_CREATE_EMPLOY_FAILURE";
export const SET_DATA_CREATE_OR_UPDATE_EMPLOY = "SET_DATA_CREATE_OR_UPDATE_EMPLOY";
export const SET_ERROR_CREATE_OR_UPDATE_EMPLOY = "SET_ERROR_CREATE_OR_UPDATE_EMPLOY";
export const SET_VISIBLE_MODAL_CREATE_OR_UPDATE_EMPLOY = "SET_VISIBLE_MODAL_CREATE_OR_UPDATE_EMPLOY";
export const SET_IS_EDIT_EMPLOY = "SET_IS_EDIT_EMPLOY";

export const REQUEST_GET_EMPLOY = "REQUEST_GET_EMPLOY";
export const REQUEST_GET_EMPLOY_SUCCESS = "REQUEST_GET_EMPLOY_SUCCESS";
export const REQUEST_GET_EMPLOY_FAILURE = "REQUEST_GET_EMPLOY_FAILURE";
export const REQUEST_SET_DATA_FILTER_SEARCH = "REQUEST_SET_DATA_FILTER_SEARCH";

export const SET_VISIBLE_MODAL_DELETE_EMPLOY = "SET_VISIBLE_MODAL_DELETE_EMPLOY";
export const REQUEST_DELETE_EMPLOY = "REQUEST_DELETE_EMPLOY";
export const REQUEST_DELETE_EMPLOY_SUCCESS = "REQUEST_DELETE_EMPLOY_SUCCESS";
export const REQUEST_DELETE_EMPLOY_FAILURE = "REQUEST_DELETE_EMPLOY_FAILURE";

export const REQUEST_UPDATE_EMPLOY = "REQUEST_UPDATE_EMPLOY";
export const REQUEST_UPDATE_EMPLOY_SUCCESS = "REQUEST_UPDATE_EMPLOY_SUCCESS";
export const REQUEST_UPDATE_EMPLOY_FAILURE = "REQUEST_UPDATE_EMPLOY_FAILURE";

export const REQUEST_CHANGE_STATUS_IS_ACTIVE = "REQUEST_CHANGE_STATUS_IS_ACTIVE";
export const REQUEST_CHANGE_STATUS_IS_ACTIVE_SUCCESS = "REQUEST_CHANGE_STATUS_IS_ACTIVE_SUCCESS";
export const REQUEST_CHANGE_STATUS_IS_ACTIVE_FAILURE = "REQUEST_CHANGE_STATUS_IS_ACTIVE_FAILURE";

export const SET_DATA_CHANGE_PASSWORD_EMPLOY = "SET_DATA_CHANGE_PASSWORD_EMPLOY";
export const SET_ERROR_CHANGE_PASSWORD_EMPLOY = "SET_ERROR_CHANGE_PASSWORD_EMPLOY";
export const SET_VISIBLE_MODAL_CHANGE_PASSWORD_EMPLOY = "SET_VISIBLE_MODAL_CHANGE_PASSWORD_EMPLOY";
export const REQUEST_CHANGE_PASSWORD_EMPLOY = "REQUEST_CHANGE_PASSWORD_EMPLOY";
export const REQUEST_CHANGE_PASSWORD_EMPLOY_SUCCESS = "REQUEST_CHANGE_PASSWORD_EMPLOY_SUCCESS";
export const REQUEST_CHANGE_PASSWORD_EMPLOY_FAILURE = "REQUEST_CHANGE_PASSWORD_EMPLOY_FAILURE";

const defaultState = {
    /* State create or update employ */
    dataCreateOrUpdate: {
        name: '',
        email: '',
        password: ''
    },
    errorCreateOrUpdate: {
        name: '',
        email: '',
        password: ''
    },
    visibleModalCreateOrUpdateEmploy: false,
    loadingBtnCreateOrUpdate: false,
    isEdit: false,
    /* State get list employ */
    employs: [],
    paginationEmploy: {
        currentPage: '',
        perPage: '',
        totalPage: '',
        totalRecord: '',
    },
    loadingGetListEmploy: false,
    filter: {
        q: '',
        column: 'created_at',
        order: -1,
        limit: 10,
        page: 1,
    },
    /* State delete employ */
    visibleModalDeleteEmploy: false,
    loadingBtnDeleteEmploy: false,
    /* State change password */
    dataChangePassword: {
        password: '',
        rePassword: ''
    },
    errorChangePassword: {
        password: '',
        rePassword: ''
    },
    visibleModalChangePasswordEmploy: false,
    loadingBtnChangePassword: false,
};

const reducer = createReducer(defaultState, {
    /* reducer create or update employ */
    [REQUEST_CREATE_EMPLOY]: state => ({
        ...state,
        loadingBtnCreateOrUpdate: true
    }),
    [REQUEST_CREATE_EMPLOY_SUCCESS]: state => ({
        ...state,
        dataCreateOrUpdate: {
            name: '',
            email: '',
            password: ''
        },
        errorCreateOrUpdate: {
            name: '',
            email: '',
            password: ''
        },
        loadingBtnCreateOrUpdate: false
    }),
    [REQUEST_CREATE_EMPLOY_FAILURE]: state => ({
        ...state,
        loadingBtnCreateOrUpdate: false
    }),
    [SET_DATA_CREATE_OR_UPDATE_EMPLOY]: (state, action) => ({
        ...state,
        dataCreateOrUpdate: action.payload
    }),
    [SET_ERROR_CREATE_OR_UPDATE_EMPLOY]: (state, action) => ({
        ...state,
        errorCreateOrUpdate: action.payload
    }),
    [SET_VISIBLE_MODAL_CREATE_OR_UPDATE_EMPLOY]: (state, action) => ({
        ...state,
        visibleModalCreateOrUpdateEmploy: action.payload
    }),
    [SET_IS_EDIT_EMPLOY]: (state, action) => ({
        ...state,
        isEdit: action.payload
    }),
    /* reducer get list employ */
    [REQUEST_GET_EMPLOY]: state => ({
        ...state,
        loadingGetListEmploy: true,
        employs: [],
        paginationEmploy: {
            currentPage: '',
            perPage: '',
            totalPage: '',
            totalRecord: '',
        },
    }),
    [REQUEST_GET_EMPLOY_SUCCESS]: (state, action) => ({
        ...state,
        loadingGetListEmploy: false,
        employs: action.payload.data.result,
        paginationEmploy: {
            currentPage: action.payload.data.currentPage,
            perPage: action.payload.data.perPage,
            totalPage: action.payload.data.totalPage,
            totalRecord: action.payload.data.totalRecord,
        }
    }),
    [REQUEST_GET_EMPLOY_FAILURE]: state => ({
        ...state,
        loadingGetListEmploy: false,
    }),
    [REQUEST_SET_DATA_FILTER_SEARCH]: (state, action) => ({
        ...state,
        filter: action.payload,
    }),
    /* Reducer delete employ */
    [SET_VISIBLE_MODAL_DELETE_EMPLOY]: (state, action) => ({
        ...state,
        visibleModalDeleteEmploy: action.payload
    }),
    [REQUEST_DELETE_EMPLOY]: state => ({
        ...state,
        loadingBtnDeleteEmploy: true
    }),
    [REQUEST_DELETE_EMPLOY_SUCCESS]: state => ({
        ...state,
        loadingBtnDeleteEmploy: false,
        visibleModalDeleteEmploy: false
    }),
    [REQUEST_DELETE_EMPLOY_FAILURE]: state => ({
        ...state,
        loadingBtnDeleteEmploy: false
    }),
    [REQUEST_UPDATE_EMPLOY]: state => ({
        ...state,
        loadingBtnCreateOrUpdate: true
    }),
    [REQUEST_UPDATE_EMPLOY_SUCCESS]: state => ({
        ...state,
        dataCreateOrUpdate: {
            name: '',
            email: '',
            password: ''
        },
        errorCreateOrUpdate: {
            name: '',
            email: '',
            password: ''
        },
        loadingBtnCreateOrUpdate: false
    }),
    [REQUEST_UPDATE_EMPLOY_FAILURE]: state => ({
        ...state,
        loadingBtnCreateOrUpdate: false
    }),
    /* Reducer change password */
    [SET_DATA_CHANGE_PASSWORD_EMPLOY]: (state, action) => ({
        ...state,
        dataChangePassword: action.payload
    }),
    [SET_ERROR_CHANGE_PASSWORD_EMPLOY]: (state, action) => ({
        ...state,
        errorChangePassword: action.payload
    }),
    [SET_VISIBLE_MODAL_CHANGE_PASSWORD_EMPLOY]: (state, action) => ({
        ...state,
        visibleModalChangePasswordEmploy: action.payload
    }),
    [REQUEST_CHANGE_PASSWORD_EMPLOY]: state => ({
        ...state,
        loadingBtnChangePassword: true
    }),
    [REQUEST_CHANGE_PASSWORD_EMPLOY_SUCCESS]: state => ({
        ...state,
        loadingBtnChangePassword: false
    }),
    [REQUEST_CHANGE_PASSWORD_EMPLOY_FAILURE]: state => ({
        ...state,
        loadingBtnChangePassword: false
    }),
});

export default reducer;
export const namespace = 'employ';

/* Handle create employ */
export const handleSetVisibleModalCreateOrUpdateEmploy = (isShow) => ({
    type: SET_VISIBLE_MODAL_CREATE_OR_UPDATE_EMPLOY,
    payload: isShow
})

export const handleSetIsEditEmploy = (type) => ({
    type: SET_IS_EDIT_EMPLOY,
    payload: type
})

export const handleSetDataCreateOrUpdateEmploy = (data) => ({
    type: SET_DATA_CREATE_OR_UPDATE_EMPLOY,
    payload: data
})

export const handleSetErrorCreateOrUpdateEmploy = (data) => ({
    type: SET_ERROR_CREATE_OR_UPDATE_EMPLOY,
    payload: data
})

export const handleCreateEmploy = (data) => async (dispatch, getState) => {
    return await callAPI({
        method: 'post',
        apiPath: `users`,
        actionTypes: [
            REQUEST_CREATE_EMPLOY,
            REQUEST_CREATE_EMPLOY_SUCCESS,
            REQUEST_CREATE_EMPLOY_FAILURE
        ],
        variables: data,
        dispatch,
        getState
    });
}

/* Handle update employ */
export const handleUpdateEmploy = (idEmploy, data) => async (dispatch, getState) => {
    return await callAPI({
        method: 'put',
        apiPath: `users/${idEmploy}`,
        actionTypes: [
            REQUEST_UPDATE_EMPLOY,
            REQUEST_UPDATE_EMPLOY_SUCCESS,
            REQUEST_UPDATE_EMPLOY_FAILURE
        ],
        variables: {
            name: data.name
        },
        dispatch,
        getState
    });
}

/* Handle get list employ */
export const handleSetDataFilterSearchEmploys = (data) => ({
    type: REQUEST_SET_DATA_FILTER_SEARCH,
    payload: data
})

export const getListEmploy = () => async  (dispatch, getState) => {
    let { employ } = getState();
    return await callAPI({
        method: 'get',
        apiPath: `users`,
        actionTypes: [
            REQUEST_GET_EMPLOY,
            REQUEST_GET_EMPLOY_SUCCESS,
            REQUEST_GET_EMPLOY_FAILURE
        ],
        variables: employ.filter,
        dispatch,
        getState
    });
}

/* Handle delete employ */
export const handleSetVisibleModalDeleteEmploy = (isShow) => ({
    type: SET_VISIBLE_MODAL_DELETE_EMPLOY,
    payload: isShow
})

export const handleDeleteEmploy = (idEmploy) => async (dispatch, getState) => {
    return await callAPI({
        method: 'delete',
        apiPath: `users/${idEmploy}`,
        actionTypes: [
            REQUEST_DELETE_EMPLOY,
            REQUEST_DELETE_EMPLOY_SUCCESS,
            REQUEST_DELETE_EMPLOY_FAILURE
        ],
        variables: [],
        dispatch,
        getState
    });
}

/* Handle change status is_active */
export const handleChangeStatusIsActive = (idEmploy, isActive) => async (dispatch, getState) => {
    return await callAPI({
        method: 'put',
        apiPath: `users/${idEmploy}/change-status`,
        actionTypes: [
            REQUEST_CHANGE_STATUS_IS_ACTIVE,
            REQUEST_CHANGE_STATUS_IS_ACTIVE_SUCCESS,
            REQUEST_CHANGE_STATUS_IS_ACTIVE_FAILURE
        ],
        variables: {
            isActive: isActive
        },
        dispatch,
        getState
    });
}

/* Change password */
export const handleSetVisibleModalChangePasswordEmploy = (isShow) => ({
    type: SET_VISIBLE_MODAL_CHANGE_PASSWORD_EMPLOY,
    payload: isShow
})

export const handleSetDataChangePasswordEmploy = (data) => ({
    type: SET_DATA_CHANGE_PASSWORD_EMPLOY,
    payload: data
})

export const handleSetErrorChangePasswordEmploy = (data) => ({
    type: SET_ERROR_CHANGE_PASSWORD_EMPLOY,
    payload: data
})

export const changePasswordEmploy = (id, dataChangePassword) => async (dispatch, getState) => {
    return await callAPI({
        method: 'put',
        apiPath: `users/${id}/change-password`,
        actionTypes: [
            REQUEST_CHANGE_PASSWORD_EMPLOY,
            REQUEST_CHANGE_PASSWORD_EMPLOY_SUCCESS,
            REQUEST_CHANGE_PASSWORD_EMPLOY_FAILURE
        ],
        variables: {
            newPassword: dataChangePassword.password,
            newRePassword: dataChangePassword.rePassword,
        },
        dispatch,
        getState
    });
}
