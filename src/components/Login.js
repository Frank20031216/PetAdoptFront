import React, { useState } from "react";
import "../compoentsCss/Login.css"
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // 这里添加登录逻辑
        authenticateUser(username, password);
    };

    function authenticateUser(username, password) {
        // 这里应该是调用后端API的代码
        // 假设我们使用fetch来发送请求
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // 登录成功，保存用户信息，如token
                    localStorage.setItem('userToken', data.token);
                    // 根据用户角色跳转到不同页面
                    if (data.userRole === 'admin') {
                        // 重定向到管理页面
                    } else {
                        // 重定向到用户页面
                    }
                } else {
                    // 登录失败，显示错误信息
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }




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
            </form>
        </div>
    );
}

export default Login;