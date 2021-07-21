import { combineReducers } from 'redux';
import uiReducer from './uiReducer/reducer';

const rootReducer = combineReducers({ uiReducer });

export default rootReducer;