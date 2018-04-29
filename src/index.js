// react提供一个context API 可以解决跨组件的数据传递
// 16.3以前的context 和现在最新版context用法有区别
// 在16.3官方不推荐使用,如果某个组件shouldComponentUpdate返回了false后面的组件就不会更新了
// contextAPI 新的方法非常简便
import React from 'react';
import {render} from 'react-dom';
// 创建一个上下文,有两个属性 一个叫Provider 还有个叫Consume
// createContext中的对象是默认参数
let { Consumer,Provider} = React.createContext();
class Title extends React.Component{
    render(){
        // 子类通过Consumer进行消费 内部必须是一个函数 函数的参数是Provider的value属性
        return <Consumer>
            {({s,h})=>{
                return <div style={s} onClick={()=>{
                    h('red');
                }}>hello</div>
            }}
        </Consumer>
    }
}
class Head extends React.Component{
    render() {
        return <div>
            <Title></Title>
        </div>
    }
}
//  Provider使用在父组件上
class App extends React.Component{
    constructor(){
        super();
        this.state = {color:'green'}
    }
    handleClick = (newColor) =>{
        this.setState({ color: newColor})
    }
    render(){
        return <Provider value={{ s: this.state,h:this.handleClick}}>
            <Head></Head>
        </Provider>
    }
}
render(<App></App>,window.root)