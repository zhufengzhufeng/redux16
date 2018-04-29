// 数据源

let state = {
    title:{
        color:'red',
        text:'标题'
    },
    content:{
        color:'blue',
        text:'内容'
    }
}
// 渲染标题
function renderTitle(){
    let title = document.querySelector('#title');
    title.style.background = state.title.color;
    title.innerHTML = state.title.text;
}
// 先定义好我要干哪些事情（常量） 宏
const CHANGE_TITLE_COLOR = 'CHANGE_TITLE_COLOR';
const CHANGE_CONTENT_TEXT = 'CHANGE_CONTENT_TEXT';
// 派发时应该将修改将修改的动作提交过来
// dispatch参数 {type:'CHANGE_TITLE_COLOR',color:'red'}
function dispatch(action){ // 派发的方法，这里要更改状态
    switch (action.type) {
        case CHANGE_TITLE_COLOR:
            state.title.color = action.color;
            break;
        case CHANGE_CONTENT_TEXT:
            // action.text属性是你调用dispatch方法自己定义好的
            state.content.text = action.text;
            break;
        default:
            break;
    }
}
// 渲染内容
function renderContent(){
    let content = document.querySelector('#content');
    content.style.background = state.content.color;
    content.innerHTML = state.content.text;
}
// 渲染的方法
function render() {
    renderTitle();
    renderContent();
}
render();

// 1.状态不应该是全局的 也不应该哪个方法里直接可以更改（操作危险）
// 2.应该提供一个改状态的方法 不要让用户修改状态
// 3.每次修改状态时需要调用一个dispatch方法，调用时直接提供一个对象带有type类型来告诉它怎样更改
dispatch({ type: CHANGE_CONTENT_TEXT,text:'珠峰培训'});
render();