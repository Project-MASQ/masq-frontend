import { createReducer } from 'redux-create-reducer';

export const BOOT = 'BOOT';
export const SET_IS_SHOW_SIDE_BAR = 'SET_IS_SHOW_SIDE_BAR';
export const SET_BREAD_CRUMB = 'SET_BREAD_CRUMB';

const defaultState = {
    isBooting: false,
    bootDidFinish: false,
    isShowSideBar: true,
    breadcrumb: []
};

const reducer = createReducer(defaultState, {
    [BOOT]: state => ({
        ...state,
        isBooting: true,
        bootDidFinish: false
    }),
    [SET_IS_SHOW_SIDE_BAR]: (state, action) => ({
        ...state,
        isShowSideBar: action.payload
    }),
    [SET_BREAD_CRUMB]: (state, action) => ({
        ...state,
        breadcrumb: action.payload
    })
});

export default reducer;
export const namespace = 'app';

export const boot = (options = {}) => ({
    type: BOOT,
    payload: options
});

export const setIsShowSideBar = (isShowSideBar) => ({
    type: SET_IS_SHOW_SIDE_BAR,
    payload: isShowSideBar
});

export const setBreadCrumb = (breadCrumb) => ({
    type: SET_BREAD_CRUMB,
    payload: breadCrumb
});
