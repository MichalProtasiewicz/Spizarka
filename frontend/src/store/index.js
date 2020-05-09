import { createStore } from 'redux';
import productsApp from 'reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  productsApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
);

export default store;
