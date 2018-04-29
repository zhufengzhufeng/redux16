// 创建store
import { createStore } from '../redux';
import reducer from './reducers/counter';
let store = createStore(reducer);

export default store;