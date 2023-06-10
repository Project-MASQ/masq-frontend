export const ROUTE_HOME = 'route/ROUTE_HOME';
export const ROUTE_AUTH = 'route/ROUTE_AUTH';
export const ROUTE_PROFILE = 'route/ROUTE_PROFILE';
export const ROUTE_OWNER_FRAME = 'route/ROUTE_OWNER_FRAME';
export const ROUTE_PATIENT_ORDER = 'route/ROUTE_PATIENT_ORDER';
export const ROUTE_RESTOCK = 'route/ROUTE_RESTOCK';
export const ROUTE_ORDER_HISTORY = 'route/ROUTE_ORDER_HISTORY';
export const ROUTE_PAYMENT_METHODS = 'route/ROUTE_PAYMENT_METHODS';
export const ROUTE_USER_MANAGEMENT = 'route/ROUTE_USER_MANAGEMENT';

export const selectRouteType = state => state.location.type;
export const selectRoutesMap = state => state.location.routesMap;
export const selectPreviousRoute = state => state.location.prev;

export const goToPage = (routeType, payload) => ({
    type: routeType,
    payload: payload
});
