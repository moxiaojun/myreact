import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,//容器
    Route//一条路由
}from 'react-router-dom';
function Home(){
    return <h1>Home</h1>
}
function User(){
    return <h1>User</h1>
}
function Profile(){
    return <h1>Profile</h1>
}
ReactDOM.render(
    <Router>
        <div>
            <Route path="/home" component={Home}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/profile" component={Profile}></Route>
        </div>
    </Router>,document.querySelector('#root')
)
