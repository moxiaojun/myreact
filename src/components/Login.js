import React from 'react';
export default function (props) {
    console.log(props);
    return <button className='btn btn-primaty' onClick={()=>{
        localStorage.setItem('login','true');
        props.history.push(props.location.state.from)
    }}>登录</button>
}