import counter from './counter';
import todo from './todo';
import {combineReducers} from '../../redux'
let reducer = combineReducers({
    c: counter,
    t: todo
});
export default reducer