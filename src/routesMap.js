import {NOT_FOUND} from 'redux-first-router';
import {
    ROUTE_AUTH,
    ROUTE_HOME,
    ROUTE_EMPLOY,
    ROUTE_PROFILE
} from './state/modules/routing';
import {loadHomePage} from './state/modules/home/saga';
import {loadAuthPage} from "./state/modules/auth/saga";
import {loadProfilePage} from "./state/modules/profile/saga";
import {loadEmployPage} from "./state/modules/employ/saga";

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
    [ROUTE_EMPLOY]: {
        path: '/employ',
        component: 'Employ',
        saga: loadEmployPage
    },
    [ROUTE_AUTH]: {
        path: '/login',
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
