import {
    all,
    fork
} from 'redux-saga/effects';

function* loadRouteData() {
    //
}

function* handleActions() {
    //
}

export function* loadHomePage() {
    yield all([
        fork(loadRouteData),
        fork(handleActions)
    ]);
}
