import axios from 'axios';
import {
  requestContactsAction,
  successContactsAction,
  errorContactsAction,
  requestAddContactsAction,
  successAddContactsAction,
  errorAddContactsAction,
  requestDeleteContactsAction,
  successDeleteContactsAction,
  errorDeleteContactsAction,
} from './actions';

// axios.defaults.baseURL = 'http://localhost:6060';

export const getContacts = () => dispatch => {
  dispatch(requestContactsAction());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(successContactsAction(data)))
    .catch(error => dispatch(errorContactsAction(error.message)));
};

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(requestAddContactsAction());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(successAddContactsAction(data)))
    .catch(error => dispatch(errorAddContactsAction(error.message)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(requestDeleteContactsAction());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(successDeleteContactsAction(contactId)))
    .catch(error => dispatch(errorDeleteContactsAction(error.message)));
};
