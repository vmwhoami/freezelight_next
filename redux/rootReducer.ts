import { combineReducers } from 'redux';
import uiReducer from './uiReducer/reducer';

const rootReducer = combineReducers({ commonReducer });

export default rootReducer;