import {
    all,
    fork,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    handleGetMe, handleSetDataChangePassword, handleSetErrorChangePassword, REQUEST_CHANGE_PASSWORD_FAILURE,
    REQUEST_CHANGE_PASSWORD_SUCCESS,
    REQUEST_UPDATE_INFO_FAILURE,
    REQUEST_UPDATE_INFO_SUCCESS
} from "./index";
import {getNotification} from "../../../utils/helper";

function* loadRouteData() {
    yield put(handleGetMe());
}

function* handleActions() {
    /* Update info */
    yield takeLatest(REQUEST_UPDATE_INFO_SUCCESS, function*() {
        yield put(handleGetMe());
        getNotification('success','Cập nhật thông tin cá nhân','Cập nhật thành công!');
    });

    yield takeLatest(REQUEST_UPDATE_INFO_FAILURE, function*(action) {
        let statusError = action.payload.data.status;
        let message = action.payload.data.message;
        if (statusError !== 400) {
            message = 'Cập nhật thất bại!';
        }
        yield put(handleGetMe());
        getNotification('error','Cập nhật thông tin cá nhân', message);

    });

    /* Change password */
    yield takeLatest(REQUEST_CHANGE_PASSWORD_SUCCESS, function*() {
        getNotification('success','Cập nhật mật khẩu','Cập nhật thành công!');
        yield put(handleSetDataChangePassword({
            oldPassword: '',
            newPassword: '',
            newRePassword: '',
        }))
    });

    yield takeLatest(REQUEST_CHANGE_PASSWORD_FAILURE, function*(action) {
        let statusError = action.payload.data.statusCode;
        if (statusError !== 400) {
            let message = action.payload.data.message;
            message = 'Cập nhật thất bại!';
            getNotification('error','Cập nhật mật khẩu', message);
        } else {
            yield put(handleSetErrorChangePassword(action.payload.data.details[0]))
        }
    });
}

export function* loadProfilePage() {
    yield all([
        fork(loadRouteData),
        fork(handleActions)
    ]);
}

