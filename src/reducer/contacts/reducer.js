import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  contacts: [],
  filters: '',
  isLoading: false,
};

const getContacts = (_, actions) => actions.payload;

const addContact = (state, action) => [...state, action.payload];

const deleteContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const contacts = createReducer(initialState.contacts, {
  [actions.successContactsAction]: getContacts,
  [actions.successAddContactsAction]: addContact,
  [actions.successDeleteContactsAction]: deleteContact,
});

const filters = createReducer(initialState.filters, {
  [actions.filterContactAction.type]: (_, action) => action.payload,
});
const isLoading = createReducer(initialState.isLoading, {
  [actions.requestContactsAction]: () => true,
  [actions.successContactsAction]: () => false,
  [actions.errorContactsAction]: () => false,
  [actions.requestAddContactsAction]: () => true,
  [actions.successAddContactsAction]: () => false,
  [actions.errorAddContactsAction]: () => false,
  [actions.requestDeleteContactsAction]: () => true,
  [actions.successDeleteContactsAction]: () => false,
  [actions.errorDeleteContactsAction]: () => false,
});

export default combineReducers({
  contacts,
  filters,
  isLoading,
});
