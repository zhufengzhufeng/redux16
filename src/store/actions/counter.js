import * as types from '../action-types';
let counter = {
    add(n) {
        return { type: types.INCREMENT, count: n }
    },
    minus(n) {
        return { type: types.DECREMENT, count: n }
    }
}
export default counter