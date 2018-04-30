import { combineReducers } from 'redux-immutable';
import counter from './counter.js';
// 会将{counter:{number:0}}对象转化成immutable对象
export default combineReducers({
    counter
});