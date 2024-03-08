export const selectIsAuthenticated = state => state.auth.isAuthenticated;

export const selectIsRefreshing = state => state.isRefreshing;
export const selectUser = state => state.auth.user;
export const selectIsLoggedin = state => state.auth.isLoggedin;