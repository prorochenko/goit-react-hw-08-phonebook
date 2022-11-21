import { createSelector } from '@reduxjs/toolkit';

// CONTACTS
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

// FILTER
export const getFilter = state => state.filter;

// FILTERED VALUE
export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    const filteredContacts = contacts.filter(item => {
      return item.name.toLocaleLowerCase().includes(filterValue);
    });

    return filteredContacts;
  }
);

// AUTH
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.user.name;
export const getIsLoadingAuth = state => state.auth.isLoading;
export const getToken = state => state.auth.token;
