import { combineReducers } from 'redux';

import appReducer, { namespace as appNamespace } from './modules/app';
import authReducer, { namespace as authNamespace } from './modules/auth';
import profileReducer, { namespace as profileNamespace } from './modules/profile';
import homeReducer, { namespace as homeNamespace } from './modules/home';
import employReducer, { namespace as employNamespace } from './modules/employ';

const reducer = extraReducers =>
    combineReducers({
        [appNamespace]: appReducer,
        [authNamespace]: authReducer,
        [homeNamespace]: homeReducer,
        [profileNamespace]: profileReducer,
        [employNamespace]: employReducer,
        ...extraReducers
    })

export default reducer;
