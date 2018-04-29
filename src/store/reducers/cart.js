import * as types from '../action-types';
let initState = [
    {id:1,checked:true,name: '苹果（APPLE）',price:21444,count:1},
    {id:2,checked:true,name: '鼠标（APPLE）',price: 599,count:1}
];
function cart(state = initState,action) {
    switch (action.type) {
        // 更改选择的状态是根据id来操控的 {type:'CHANGE_CHECK',id:2}
        case types.CHANGE_CHECK:
            return state.map(cart=>{
                if(cart.id === action.id ){
                    cart.checked = !cart.checked;
                }
                return cart;
            });
        // 删除商品的功能
        case types.REMOVE_CART:
            return state.filter(cart=>cart.id!==action.id);
    }
    return state;
}
// 购物车管理员
export default cart;