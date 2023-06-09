import {
    all,
    fork,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    getListEmploy, handleSetDataChangePasswordEmploy, handleSetErrorChangePasswordEmploy,
    handleSetErrorCreateOrUpdateEmploy, handleSetVisibleModalChangePasswordEmploy,
    handleSetVisibleModalCreateOrUpdateEmploy,
    REQUEST_CHANGE_PASSWORD_EMPLOY_FAILURE,
    REQUEST_CHANGE_PASSWORD_EMPLOY_SUCCESS,
    REQUEST_CHANGE_STATUS_IS_ACTIVE_FAILURE,
    REQUEST_CHANGE_STATUS_IS_ACTIVE_SUCCESS,
    REQUEST_CREATE_EMPLOY_FAILURE,
    REQUEST_CREATE_EMPLOY_SUCCESS,
    REQUEST_DELETE_EMPLOY_FAILURE,
    REQUEST_DELETE_EMPLOY_SUCCESS,
    REQUEST_UPDATE_EMPLOY_FAILURE,
    REQUEST_UPDATE_EMPLOY_SUCCESS
} from "./index";
import {getNotification} from "../../../utils/helper";

function* loadRouteData() {
    yield put(getListEmploy());
}

function* handleActions() {
    /* Create employ */
    yield takeLatest(REQUEST_CREATE_EMPLOY_SUCCESS, function*() {
        getNotification('success','Tạo nhân viên','Tạo mới thành công!');
        yield put(handleSetVisibleModalCreateOrUpdateEmploy(false));
        yield put(getListEmploy());
    });

    yield takeLatest(REQUEST_CREATE_EMPLOY_FAILURE, function*(action) {
        let statusError = action.payload.data.statusCode;
        if (statusError === 500) {
            let message = 'Tạo nhân viên thất bại!';
            getNotification('error','Tạo nhân viên', message);
        }  else {
            let message = action.payload.data.message;
            if (action.payload.data.details && action.payload.data.details.length > 0) {
                yield put(handleSetErrorCreateOrUpdateEmploy(action.payload.data.details[0]))
            } else {
                getNotification('error','Tạo nhân viên', message);
            }
        }
    });

    /* Update employ */
    yield takeLatest(REQUEST_UPDATE_EMPLOY_SUCCESS, function*() {
        getNotification('success','Cập nhật nhân viên','Cập nhật thành công!');
        yield put(handleSetVisibleModalCreateOrUpdateEmploy(false));
        yield put(getListEmploy());
    });

    yield takeLatest(REQUEST_UPDATE_EMPLOY_FAILURE, function*(action) {
        let statusError = action.payload.data.statusCode;
        if (statusError === 500) {
            let message = 'Cập nhật nhân viên thất bại!';
            getNotification('error','Cập nhật nhân viên', message);
        }  else {
            let message = action.payload.data.message;
            if (action.payload.data.details && action.payload.data.details.length > 0) {
                yield put(handleSetErrorCreateOrUpdateEmploy(action.payload.data.details[0]))
            } else {
                getNotification('error','Cập nhật nhân viên', message);
            }
        }
    });

    /* Delete employ */
    yield takeLatest(REQUEST_DELETE_EMPLOY_SUCCESS, function*() {
        getNotification('success','Xóa nhân viên','Xóa thành công!');
        yield put(getListEmploy());
    });

    // eslint-disable-next-line require-yield
    yield takeLatest(REQUEST_DELETE_EMPLOY_FAILURE, function*(action) {
        let statusError = action.payload.data.statusCode;
        if (statusError === 500) {
            let message = 'Xóa nhân viên thất bại!';
            getNotification('error','Xóa nhân viên', message);
        }  else {
            let message = action.payload.data.message;
            getNotification('error','Xóa nhân viên', message);
        }
    });

    /* Change status is_active */
    yield takeLatest(REQUEST_CHANGE_STATUS_IS_ACTIVE_SUCCESS, function*() {
        getNotification('success','Thay đổi trạng thái','Thay đổi trạng thái thành công!');
        yield put(getListEmploy());
    });

    // eslint-disable-next-line require-yield
    yield takeLatest(REQUEST_CHANGE_STATUS_IS_ACTIVE_FAILURE, function*(action) {
        let statusError = action.payload.data.statusCode;
        if (statusError === 500) {
            let message = 'Thay đổi trạng thái thất bại!';
            getNotification('error','Thay đổi trạng thái', message);
        }  else {
            let message = action.payload.data.message;
            getNotification('error','Thay đổi trạng thái', message);
        }
    });
    /* Change password employ */
    yield takeLatest(REQUEST_CHANGE_PASSWORD_EMPLOY_SUCCESS, function*() {
        getNotification('success','Cập nhật mật khẩu','Cập nhật thành công!');
        yield put(handleSetDataChangePasswordEmploy({
            password: '',
            rePassword: ''
        }));
        yield put(handleSetVisibleModalChangePasswordEmploy(false));
        yield put(getListEmploy());
    });

    yield takeLatest(REQUEST_CHANGE_PASSWORD_EMPLOY_FAILURE, function*(action) {
        let statusError = action.payload.data.statusCode;
        if (statusError !== 400) {
            let message = action.payload.data.message;
            message = 'Cập nhật thất bại!';
            getNotification('error','Cập nhật mật khẩu', message);
        } else {
            yield put(handleSetErrorChangePasswordEmploy(action.payload.data.details[0]))
        }
    });
}

export function* loadEmployPage() {
    yield all([
        fork(loadRouteData),
        fork(handleActions)
    ]);
}

