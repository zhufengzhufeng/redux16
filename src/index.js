import React from 'react';
import {render} from 'react-dom';
import Counter from './components/counter'
import { Provider } from "./react-redux";
import store from './store'
render(<Provider store={store}>
    <React.Fragment>
        <Counter></Counter>
    </React.Fragment>
</Provider> ,window.root)

// redux 
// store 容器 一个应用里只有一个 一个应该里只有一个状态
// reducer 多个reducer 合并reducer combineReducers
// dispatch redux提供的方法
// action 要求必须有type actionCreator 

// react-redux 
// Provider 提供一个store
// connect 去拿到store store.getStat() store.dipatch


// 计数器
// 增加 减少