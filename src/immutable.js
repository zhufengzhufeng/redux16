let { Map } = require('immutable');
// 导入immutable List Map

//1.只操作对象
let obj = { a: 1 };
// 返回的m1 就是不可变对象，用远不会变
let m1 = Map(obj);
//let m2 = m1.set('a', 100); // 调用set后永远返回的都是一个新的不可变对象
let m2 = m1.update('a', (a) => a + 100)
console.log(m1.get('a'));
console.log(m2.get('a'));

// Map只处理一层
// fromJS可以支持多层,公用的部分会共享数据
let { Map, fromJS } = require('immutable');
let obj = { a: { a: 1 }, b: 2 }
let m1 = fromJS(obj);
let m2 = m1.set('b', 3);
console.log(m1.get('a') === m2.get('a'));
console.log(m1.get('b'), m2.get('b'));


let { Map, fromJS, List } = require('immutable');
let obj = { a: { b: { c: { d: 1 }, d: 100 }, m: 100 } }
// let m1 = fromJS(obj);
// let m2 = m1.setIn(['a','b','c','d'],2);
// console.log(m1.getIn(['a', 'b', 'c', 'd']));


// 可以支持数组 对数组的增删改查
let m1 = fromJS([[1, 2, 3], [4, 5, 6]]);
console.log(m1.get(0));
// 可以操作数组 包括数组中push sort


// ------------------------
let { Map, fromJS, List, is } = require('immutable');
let m1 = fromJS({ a: 1 });
// 一般情况尽量不要调用toJS
console.log(m1.toJS().a)

let m3 = fromJS({ a: 1, b: { a: 123 } });
let m4 = fromJS({ a: 1, b: { a: 123 } });
console.log(is(m3, m4))