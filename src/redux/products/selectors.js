
export const selectProducts = state => state.contacts.products.items;

export const selectIsLoading = state => state.contacts.products.isLoading;

export const selectError = state => state.contacts.products.error;

export const selectFilter = state => state.contacts.filters;