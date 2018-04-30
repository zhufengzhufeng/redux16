// {Provider,connect}
import React from 'react';
// Provider有一个属性 是store
let Context = React.createContext();
class Provider extends React.Component{
    render(){
        return <Context.Provider value={this.props.store}>
            {this.props.children}
        </Context.Provider>
    }
}
// 最后connect放回的组件一定是Provider的子组件
let connect = (mapStateToProps,mapDispatchToProps)=>(Component)=>{
    return class Proxy extends React.Component{
        // 可以算出一些属性 传递给Component
        render(){
            return <Context.Consumer>
                {(store)=>{
                    let state = mapStateToProps(store.getState());
                    let actions = mapDispatchToProps(store.dispatch);
                    // 状态变化后 需要更新视图  this.setState()
                    return <Component {...state} {...actions}></Component>
                }}
            </Context.Consumer>
        }
    }
}
export { Provider,connect}