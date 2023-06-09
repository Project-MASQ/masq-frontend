import {
    all,
    fork,
    put,
    takeLatest,
    select
} from 'redux-saga/effects';
import {BOOT} from '../app';
import { redirect } from 'redux-first-router';
import {
    goToPage, ROUTE_AUTH,
    selectRouteType
} from '../routing';
import {REQUEST_LOGOUT_FAILURE, REQUEST_LOGOUT_SUCCESS} from "../auth";
import {removeAuthToken} from "../../../utils/localStorage";
import {getNotification} from "../../../utils/helper";

function* watchAppBoot() {
    yield takeLatest(BOOT, function*() {
        const routeType = yield select(selectRouteType);
        const { location } = yield select();

        // yield put(bootFinished());
        yield put(redirect({
            type: routeType,
            payload: location.payload,
            query: location.query
        }));
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
            message = 'Vui lòng thử lại!';
        }
        getNotification('error','Đăng xuất tài khoản', message);
    });
}

export default function* auth() {
    yield all([
        fork(watchAppBoot),
    ]);
}
