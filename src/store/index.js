import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
// import _history from '../util/history'
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};
// for redux-tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(
	thunkMiddleware
))(createStore);

const store = createStoreWithMiddleware(rootReducer, {});
// export const history = syncHistoryWithStore(_history, store);

window.store = store;
export default store;

