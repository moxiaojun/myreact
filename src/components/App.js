import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home'
import User from './User'
import Profile from './Profile'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import MenuLink from './MenuLink'
/**
 * 权限设置 判断是否登录
 **/


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
                            <MenuLink label="首页" to="/home" />
                            <MenuLink label="用户管理" to="/user" />
                            <MenuLink label="个人设置" to="/profile" />
                        </ul>
                    </div>
                </nav>
                <div className="container" style={{marginTop:'30px'}}>
                    <div className="row">
                        <div className="col-md-12">
                            <Switch>
                                <Route path="/home" component={Home}></Route>
                                <Route path="/user" component={User}></Route>
                                <ProtectedRoute path="/profile" component={Profile}></ProtectedRoute>
                                <Route path="/Login" component={Login}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>

            </div>
        </Router>
)}}
