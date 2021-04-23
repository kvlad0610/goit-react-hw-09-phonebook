import { createAction } from '@reduxjs/toolkit';

export const filterContactAction = createAction('contact/filter');

export const requestContactsAction = createAction('contacts/request');
export const successContactsAction = createAction('contacts/success');
export const errorContactsAction = createAction('contacts/error');

export const requestAddContactsAction = createAction('contacts/add/request');
export const successAddContactsAction = createAction('contacts/add/success');
export const errorAddContactsAction = createAction('contacts/add/error');

export const requestDeleteContactsAction = createAction(
  'contacts/delete/request',
);
export const successDeleteContactsAction = createAction(
  'contacts/delete/success',
);
export const errorDeleteContactsAction = createAction('contacts/delete/error');
