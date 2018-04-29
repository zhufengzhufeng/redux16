import React, { Component } from 'react';
import {connect} from 'react-redux'
class CartList extends Component {
    constructor() {
        super();
    }
    render() {
        return (<table className="table table-bordered">
            <thead>
                <tr>
                    <th>全选 非全选</th>
                    <th>商品名称</th>
                    <th>商品数量</th>
                    <th>商品价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {this.props.carts.map((item,index)=>(
                    <tr key={index}>
                        <td><input type="checkbox" checked={item.checked}/></td>
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td>{item.price}</td>
                        <td><button>删除</button></td>
                    </tr>
                ))}
            </tbody>
        </table>)
    }
}
export default connect((state)=>({
    carts: state.cart
}))(CartList);