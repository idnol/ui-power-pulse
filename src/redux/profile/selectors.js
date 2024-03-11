export const selectProfile = (state) => state.profile.items;
export const selectIsLoading = (state) => state.profile.isLoading;
export const selectError = (state) => state.profile.error;

export const selectDateBirthday = (state) => state.profile.items.bodyData;
