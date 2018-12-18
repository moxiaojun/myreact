# React-Router4

##react 路由学习

## 安装路由
```
npm install react-router-dom -S
```

## 新建App组件在index.js中引用
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

ReactDOM.render(
    <App></App>,document.querySelector('#root')
)

```

## 跑通路由
### 新建Home  User  Profile组件并在App.js中引用
```
import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home'
import User from './User'
import Profile from './Profile'
export default class App extends Component{
    render(){
        return(
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor: '#e3f2fd'}}>
                    <span className="navbar-brand">用户管理系统</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/home">首页</Link>
                            <Link to="/user">用户管理</Link>
                            <Link to="/profile">个人设置</Link>
                        </ul>
                    </div>
                </nav>
                <div className="container" style={{marginTop:'30px'}}>
                    <div className="row">
                        <div className="col-md-12">
                            <Switch>
                                <Route path="/home" component={Home}></Route>
                                <Route path="/user" component={User}></Route>
                                <Route path="/Login" component={Login}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
)}}



```

## 嵌套子路由
### 在user下增加UserAdd UserList UserDetail子组件
### 增加子路由显示

```
import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom'
import UserList from './UserList'
import UserAdd from './UserAdd'
import UserDetail from './UserDetail'
export default class User extends Component{
    render(){
        return(
            <div className='row'>
                <div className="col-sm-2">
                    <ul className="nav flex-column">
                        <li className="nav-link active">
                            <Link to="/user/list">用户列表</Link>
                            </li>
                        <li className="nav-link">
                            <Link to="/user/add">新增用户</Link></li>
                    </ul>
                </div>
                <div className="col-sm-10">
                    <Route exact path="/user" component={UserList}></Route>
                    <Route path="/user/list" component={UserList}></Route>
                    <Route path="/user/add" component={UserAdd}></Route>
                    <Route path="/user/detail/:id" component={UserDetail}></Route>
                </div>
            </div>
        )
    }
}
```
```
<Route exact path="/user" component={UserList}></Route>//exact精准匹配path,当匹配到/user 和/user/list都要显示list页面
```

## 在UserAdd中向localStorage中添加用户
```
import React,{Component} from 'react';
import {Prompt} from 'react-router-dom'
export default class UserAdd extends Component{
    constructor(props){
        super(props);
        //默认不阻止跳转
        this.state = {blocking:false};
    }
    handleSubmit = ()=>{
        let name = this.name.value;
        let userStr = localStorage.getItem('users');
        let users = userStr?JSON.parse(userStr) : [];
        users.push({id:Date.now(),name});
        localStorage.setItem('users',JSON.stringify(users));
        this.setState({
            blocking:false
        },()=>{
            this.props.history.push('/user/list')
        })

    }
    handleChange = (event)=>{
        this.setState({
            blocking:event.target.value && event.target.value.length>0
        })
    }
    render(){
        return(
            <div>
                <Prompt when={this.state.blocking} message={(location)=>`你确定要跳转到${location.pathname}吗`}></Prompt>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">姓名</label>
                        <input type="text" onChange={this.handleChange} className="form-control" ref={ref=>this.name=ref}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-commit">提交</button>
                    </div>
                </form>
            </div>
        )
    }
}
```
### Prompt为弹出窗组件，在状态中添加一个blocking 用来判断是否要弹出窗阻止用户误操作跳转

