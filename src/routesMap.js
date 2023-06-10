import {NOT_FOUND} from 'redux-first-router';
import {
    ROUTE_AUTH,
    ROUTE_HOME,
    ROUTE_PROFILE,
    ROUTE_RESET_PASSWORD
} from './state/modules/routing';
import {loadHomePage} from './state/modules/home/saga';
import {loadAuthPage} from "./state/modules/auth/saga";
import {loadProfilePage} from "./state/modules/profile/saga";

const routeMap = {
    [NOT_FOUND]: {
        path: '/not-found',
        component: 'NotFound',
    },
    [ROUTE_HOME]: {
        path: '/',
        component: 'Home',
        saga: loadHomePage
    },
    [ROUTE_AUTH]: {
        path: '/login',
        component: 'Auth',
        saga: loadAuthPage
    },
    [ROUTE_RESET_PASSWORD]: {
        path: '/reset-password',
        component: 'Auth',
        saga: loadAuthPage
    },
    [ROUTE_PROFILE]: {
        path: '/profile',
        component: 'Profile',
        saga: loadProfilePage
    }
}

export default routeMap;
