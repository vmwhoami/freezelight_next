import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const initialState = {};

const store = createStore(
  rootReducer, initialState,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

export default store;