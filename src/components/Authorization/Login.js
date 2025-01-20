import React, { useState, useEffect } from "react";
import "../../compoentsCss/Login.css";
import { useGlobalState } from '../../GlobalState';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../../config';

function Login() {

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // 这里添加登录逻辑
        fetch(`${BASE_URL}/user/verify/?account=` + account + "&password=" + password,
            { method: 'POST' }).
            then((response) => {
                console.log(response.json().then((res) => {
                    console.log(res);
                    if (res == 1) {
                        fetch(`${BASE_URL}/user/getUserInformation/?account=${account}&password=${password}`).then((response) => {
                            return response.json();
                        }).then((user) => {
                            console.log(user[0]);
                            localStorage.setItem("token", 1);
                            localStorage.setItem("userId", user[0].userId);
                            localStorage.setItem("account", user[0].account);
                            localStorage.setItem("password", user[0].password);
                            localStorage.setItem("identity", user[0].identity);
                            alert("登录成功");
                            navigate("/");
                            window.location.reload();
                        });
                    }
                    else {
                        alert("用户名或密码错误");
                        setAccount("");
                        setPassword("");
                    }
                }))
            })
    };


    return (
        <div class="Loginpage">
            <form onSubmit={handleLogin} >

                <h1>LOGIN</h1>
                <label htmlFor="account">account:</label>
                <input
                    type="text"
                    id="account"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
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