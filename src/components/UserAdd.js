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