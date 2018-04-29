// 创建store
import { createStore } from '../redux';
// import reducer from './reducers/counter';
import reducer from './reducers/todo';
let store = createStore(reducer);

export default store;