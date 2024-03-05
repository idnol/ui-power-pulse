
export const selectProducts = state => state.users.products.items;

export const selectIsLoading = state => state.users.products.isLoading;

export const selectError = state => state.users.products.error;

export const selectFilter = state => state.users.filters.filters;