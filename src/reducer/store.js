// import { createStore } from 'redux';
import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

export const store = configureStore({ reducer });

export const persistor = persistStore(store);

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;
