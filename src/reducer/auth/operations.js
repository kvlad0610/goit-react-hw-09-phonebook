import axios from 'axios';
import * as actions from './actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const userToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => dispatch => {
  dispatch(actions.registerRequest());

  axios
    .post('/users/signup', credentials)
    .then(({ data }) => dispatch(actions.registerSuccess(data)))
    .catch(error => dispatch(actions.registerError(error.masege)));
};

export const login = credentials => dispatch => {
  dispatch(actions.loginRequest());

  axios
    .post('/users/login', credentials)
    .then(({ data }) => {
      dispatch(actions.loginSuccess(data));
      userToken.set(data.token);
    })
    .catch(error => dispatch(actions.loginError(error.masege)));
};

export const logOut = () => dispatch => {
  dispatch(actions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      dispatch(actions.logoutSuccess());
      userToken.unset();
    })
    .catch(error => dispatch(actions.logoutError(error.masege)));
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    user: { token },
  } = getState();
  if (!token) return;
  userToken.set(token);
  dispatch(actions.getCurrentUserRequest());
  axios
    .get('/users/current')
    .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(actions.getCurrentUserError(error.masege)));
};
