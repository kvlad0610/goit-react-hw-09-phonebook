import { combineReducers } from 'redux';
import contacts from './contacts/reducer';
import user from './auth/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export default combineReducers({
  contacts,
  user: persistReducer(persistConfig, user),
});
