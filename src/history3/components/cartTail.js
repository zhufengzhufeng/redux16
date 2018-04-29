import React, { Component } from 'react';
import { connect } from 'react-redux';
class CartTail extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div>
            总价格: {this.props.total}   
            总数量: {this.props.totalCount}
        </div>)
    }
}
export default connect(state => ({
    total: state.cart.reduce((prev, next) => {
        return prev + next.count * next.price
    }, 0),
    totalCount: state.cart.reduce((prev, next) => {
        return prev + next.count
    }, 0)
}))(CartTail);