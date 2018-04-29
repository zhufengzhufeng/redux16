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
export {createStore}

