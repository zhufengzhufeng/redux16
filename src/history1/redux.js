function createStore(reducer) {
    let state;
    let listeners = [];
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }
    let subscribe = (fn) => {
        listeners.push(fn);
        return ()=>{
            listeners = listeners.filter(listener=>fn!=listener)
        }
    }
    dispatch({});
    let getState = () => state;
    return {getState,subscribe,dispatch}
}
// => {c:{number:0},t:{todos:[]}}
// 合并reducer 把他们合并成一个
// key是新状态的命名空间 值是reducer，执行后会返回一个新的reducer
function combineReducers(reducers) {
    // 第二次调用reducer ，内部会自动的把第一次的状态传递给reducer
    return (state = {}, action) => {
        let newState = {}
        // reducer默认要返回一个状态，要获取counter的初始值和todo的初始值
        for (let key in reducers) {
            // 默认reducer俩参数 一个叫state，一个叫action
            //            undefined, {}
            let s = reducers[key](state[key], action);
            newState[key] = s;
        }
        return newState;
    }
}
export { createStore, combineReducers}

