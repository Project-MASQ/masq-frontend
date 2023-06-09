export const ROUTE_HOME = 'route/ROUTE_HOME';
export const ROUTE_AUTH = 'route/ROUTE_AUTH';
export const ROUTE_PROFILE = 'route/ROUTE_PROFILE';
export const ROUTE_EMPLOY = 'route/ROUTE_EMPLOY';

export const selectRouteType = state => state.location.type;
export const selectRoutesMap = state => state.location.routesMap;
export const selectPreviousRoute = state => state.location.prev;

export const goToPage = (routeType, payload) => ({
    type: routeType,
    payload: payload
});
