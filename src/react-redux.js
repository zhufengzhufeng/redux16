// {Provider,connect}
import React from 'react';
import {bindActionCreators} from 'redux';
// Provider有一个属性 是store
let Context = React.createContext();
class Provider extends React.Component {
    render() {
        return <Context.Provider value={this.props.store}>
            {this.props.children}
        </Context.Provider>
    }
}
// 最后connect放回的组件一定是Provider的子组件
let connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
    return function () {
        // 可以算出一些属性 传递给Component
            return <Context.Consumer>
                {(store) => {
                    class High extends React.Component{
                        constructor(){
                            super();
                            this.state = mapStateToProps(store.getState());
                            this.old = store.getState();
                        }
                        componentDidMount(){
                            // 每次派发dispatch都会调用subscibe中的方法
                            this.unsub = store.subscribe(()=>{
                                // 如果改的是同一个对象 不去更新视图
                                if (this.old == store.getState()) return;
                                this.old = store.getState();
                                this.setState(mapStateToProps(store.getState()));
                            });
                        }
                        componentWillUnmount(){
                            this.unsub();
                        }
                        render(){
                            let actions;
                            // 判断mapDispatchToProps是不是函数 不是函数就用bindActionCreators转化成对象
                            if(typeof mapDispatchToProps == 'function'){
                                actions = mapDispatchToProps(store.dispatch);
                            }else{
                                actions = bindActionCreators(mapDispatchToProps,store.dispatch);
                            }
                            return <Component 
                                {...this.state}
                                {...actions}
                            ></Component>
                        }
                    }
                    return <High></High>
                    // let state = mapStateToProps(store.getState());
                    // let actions = mapDispatchToProps(store.dispatch);
                    // // 状态变化后 需要更新视图  this.setState()
                    // return <Component {...state} {...actions}></Component>
                }}
            </Context.Consumer>
    }
}
export { Provider, connect }