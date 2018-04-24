import { combineReducers } from 'redux-immutable';

import tododata from './data/datareducer';
const rootReducer=combineReducers({
	tododata,
})
export default rootReducer;