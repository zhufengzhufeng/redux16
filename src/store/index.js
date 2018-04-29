// 创建store
import { createStore } from '../redux';
// import reducer from './reducers/counter';
import reducer from './reducers/todo';
let store = createStore(reducer);
window.store = store;// 将store作为全局属性
export default store;