import { createStore,applyMiddleware} from "redux";
import reducer from './reducers';
// 允许actionCreators返回一个函数类型
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
// 允许actionCreators返回一个Promise，也可以返回一个带promise的对象
import reduxPromise from 'redux-promise';

// reduxThunk可以把派发的权限 交给你自己
export default createStore(reducer, applyMiddleware(reduxLogger, reduxThunk, reduxPromise));