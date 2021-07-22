import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';


const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)),
);

export default store;