import React, { useState,useEffect } from "react";
import "../compoentsCss/Login.css";
import { useGlobalState } from './GlobalState';
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    

    const handleLogin = (event) => {
        event.preventDefault();
        // 这里添加登录逻辑
        fetch("http://localhost:8080/user/verify/?username=" + username+"&password="+password, 
            { method: 'POST' }).
            then((response) => {
                console.log(response.json().then((res)=>{
                    console.log(res);
                   if(res == 1)
                   {
                    fetch("http://localhost:8080/user/getIdentity/?username=" + username, 
                        { method: 'POST' }).then(response => response.text()) // 直接获取文本
                        .then(identity => {
                          console.log(identity); // 处理字符串数据
                          localStorage.setItem("identity", identity); // 保存身份信息
                        })
                    localStorage.setItem("token", 1);
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    alert("登录成功");
                    navigate("/");
                   }
                   else{
                    alert("用户名或密码错误");
                    setUsername("");
                    setPassword("");
                   }
                }))
            })
    };

    return (
        <div class="Loginpage">
            <form onSubmit={handleLogin} >

                <h1>LOGIN</h1>
                <label htmlFor="username">username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">登录</button>
                
                <a href="/signup">Don't have an account? Sign up for one!</a>
            </form>
        </div>
    );
}

export default Login;