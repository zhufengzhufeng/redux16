// 计数器 当前数量  0 button +  button -
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Counter from './components/counter';
import Todo from './components/todo';
import {Provider} from 'react-redux';
import store from './store';
// 1.先要将所有的组件外面包装一个Provider 而且要传递一个属性 store
// 2.组件不需要导入store 也不需要订阅状态
render(<Provider store={store}>
    <div>
        <Todo></Todo>
        <Counter></Counter>
    </div>
</Provider>,window.root);