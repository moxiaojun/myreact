//当通过函数来定义组件的时候参数是属性对象
//当组件不需要状态的时候可以用函数来声明
//当组件必须要用状态的时候必须用类声明
//props = {component:Profile,path:'./profile'}
import React from 'react';
import {Redirect,Route} from 'react-router-dom'
export default function ({component:Component,...rest}) {
    return <Route {...rest}
                  render = {(props)=>
                    localStorage.getItem('login')?<Component/>:<Redirect to={{
                        pathname:'/login',
                        state:{from:props.location.pathname}
                    }}/>
    }/>
}