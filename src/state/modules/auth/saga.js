import {
    all,
    fork,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    REQUEST_LOGIN_FAILURE,
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGOUT_FAILURE,
    REQUEST_LOGOUT_SUCCESS,
} from "./index";
import {setAuthToken, getAuthToken, removeAuthToken} from "../../../utils/localStorage";
import {getNotification} from "../../../utils/helper";
import {goToPage, ROUTE_AUTH, ROUTE_HOME} from "../routing";

function* loadRouteData() {
    if (getAuthToken()) {
        yield put(goToPage(ROUTE_HOME));
    }
}

function* handleActions() {
    /* Login */
    yield takeLatest(REQUEST_LOGIN_SUCCESS, function*(action) {
        setAuthToken(action.payload.access_token);
        yield put(goToPage(ROUTE_HOME));
    });

    // eslint-disable-next-line require-yield
    yield takeLatest(REQUEST_LOGIN_FAILURE, function*(action) {
        let statusError = action.payload.data.status;
        let message = action.payload.data.message;
        if (statusError !== 400) {
            message = 'Đăng nhập thất bại!';
        }
        getNotification('error','Đăng nhập tài khoản', message);
    });

    /* Logout */
    yield takeLatest(REQUEST_LOGOUT_SUCCESS, function*() {
        removeAuthToken();
        yield put(goToPage(ROUTE_AUTH));
    });

    // eslint-disable-next-line require-yield
    yield takeLatest(REQUEST_LOGOUT_FAILURE, function*(action) {
        let statusError = action.payload.data.status;
        let message = action.payload.data.message;
        if (statusError !== 400) {
            message = 'Đăng nhập thất bại!';
        }
        getNotification('error','Đăng nhập tài khoản', message);
    });
}

export function* loadAuthPage() {
    yield all([
        fork(loadRouteData),
        fork(handleActions)
    ]);
}

