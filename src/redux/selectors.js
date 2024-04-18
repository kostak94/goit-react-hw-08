import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts;
export const selectIsError = (state) => state.contacts.error;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectFilters = (state) => state.filters.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts?.filter((item) =>
      item.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
