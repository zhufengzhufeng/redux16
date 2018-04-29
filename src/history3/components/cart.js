import React,{Component} from 'react';
import CartList from './cartList';
import CartTail from './cartTail';
export default class Cart extends Component{
    constructor(){
        super();
   }
   render(){
      return (<div className="container">
        <h3 className="text-center">购物车</h3>
          <CartList></CartList>
          <CartTail></CartTail>
     </div>)
 }
}