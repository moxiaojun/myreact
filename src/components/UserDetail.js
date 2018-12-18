import React,{Component} from 'react';
export default class UserDetail extends Component{
    render(){

        let id= parseInt(this.props.match.params.id);
        let userStr = localStorage.getItem('users');
        let users = userStr?JSON.parse(userStr) : [];
        let user = users.find((user)=>{
            return user.id===id
        });
        return(
            <table className="table">
                <thead className="">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">姓名</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                </tr>
                </tbody>
            </table>
        )
    }
}