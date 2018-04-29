// 放处理counter的actionCreator
import * as types from '../action-types';
let actions = {
    add(count) {
        return { type: types.INCREMENT, count }
    },
    minus(count) {
        return { type: types.DECREMENT, count }
    }
}
export default actions