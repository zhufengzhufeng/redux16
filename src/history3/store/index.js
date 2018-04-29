import {createStore} from 'redux';
import reducer from './reducers';
// 创建容器
let store = createStore(reducer);
window.store = store;
export default store;