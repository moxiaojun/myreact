/**
 * 有些时候我们希望不管是否匹配都要显示一些东西
 * component 对应一个组件 当URL路径跟当前Route path匹配时渲染
 * render 对应一个匿名组件函数，当URL路由跟当前Rotue path匹配时渲染
 **/
import React from 'react';
import {Route,Link} from 'react-router-dom'
export default function ({to,label}) {

    return (
        //当路径匹配时才有match
        <Route path={to}
               children={({match})=>{
                return <li className={`nav-item ${match?'active':''}`}><Link className="nav-link" to={to}>{label}</Link></li>
        }}/>
    )
}