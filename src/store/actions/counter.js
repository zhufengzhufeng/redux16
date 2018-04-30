import * as types from '../action-types';
let counter = {
    add(n) {
       // 没有redux之前返回的是对象 用了之后返回的是函数
       return (dispatch,getState)=>{
            setTimeout(()=>{
                dispatch({ type: types.INCREMENT, count: n });
            },3000)
       }
    },
    minus(n) {
        // 返回一个Promise resolve的结果会被进行派发
        // 只支持成功的返回，失败是不处理的
        return { // {type:'DECREMENT',payload:{count:n}}
            type: types.DECREMENT,
            payload:new Promise((resolve,reject)=>{
                reject({count:n});
            })
        }
        // new Promise((resolve,reject)=>{
        //     setTimeout(() => resolve({ type: types.DECREMENT, count: n }),1000);
        // })
    }
}
export default counter