// let 新组件 = connect()(旧的组件) 
import React from 'react';
let high = (key) => (Component)=>{
    return class HighOrderComponent extends React.Component{
        constructor() {
            super();
            this.state = { value: '' }
        }
        componentWillMount() {
            let username = localStorage.getItem(key);
            this.setState({ value: username });
        }
        render(){
            return <Component value={this.state.value}></Component>
        }
    }
}
export default high;

