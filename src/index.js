// 高阶组件 组件返回组件
// 高阶函数

// 两个输入框 都需要去本地的localStorage取值

import React,{Component} from 'react'
import {render} from 'react-dom'
import Username from './username';
import Password from './password'
render(<div>
    <Username></Username>
    <Password></Password>
</div>,window.root)