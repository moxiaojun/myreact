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