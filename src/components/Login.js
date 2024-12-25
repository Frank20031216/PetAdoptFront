import React, {useState, useEffect, Fragment} from "react";
import "../compoentsCss/Login.css";
import {useGlobalState} from './GlobalState';
import {useNavigate} from "react-router-dom";


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleLogin = (event) => {
        event.preventDefault();
        // 这里添加登录逻辑
        fetch("http://localhost:8080/user/verify/?username=" + username + "&password=" + password,
            {method: 'POST'}).then((response) => {
            console.log(response.json().then((res) => {
                console.log(res);
                if (res == 1) {
                    fetch("http://localhost:8080/user/getIdentity/?username=" + username,
                        {method: 'POST'}).then(response => response.text()) // 直接获取文本
                        .then(identity => {
                            console.log(identity); // 处理字符串数据
                            localStorage.setItem("identity", identity); // 保存身份信息
                        })
                    localStorage.setItem("token", 1);
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    alert("登录成功");
                    navigate("/");
                } else {
                    alert("用户名或密码错误");
                    setUsername("");
                    setPassword("");
                }
            }))
        })
    };

    return (

        <Fragment>
            <form onSubmit={handleLogin}>
                <div className="outer">
                    <div className="login-container">
                        <h1>WELCOME</h1> {/* 显示欢迎标题 */}
                        <div className="input-wrap">
                            <input
                                type="text"
                                id="username"
                                className="input-no-border"
                                value={username}
                                placeholder="Your name"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <i className="fa-regular fa-user"></i>
                        </div>

                        <div className="input-wrap">

                            <input
                                type="password"
                                id="password"
                                value={password}
                                className="input-no-border"
                                placeholder="Your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="fa-solid fa-key"></i>
                        </div>

                        <div className="rem">
                            <p>
                                <input type="checkbox"/>
                                Remember Me
                            </p>
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="submit">LOGIN</button>

                        <p className="reg">Don't have an account?
                            <a>Register</a></p>

                    </div>
                </div>
            </form>




            {/*<div className="Loginpage">*/}

            {/*    <form onSubmit={handleLogin}>*/}

            {/*        <h1>LOGIN</h1>*/}
            {/*        <label htmlFor="username">username:</label>*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            id="username"*/}
            {/*            value={username}*/}
            {/*            onChange={(e) => setUsername(e.target.value)}*/}
            {/*        />*/}

            {/*        <label htmlFor="password">password:</label>*/}
            {/*        <input*/}
            {/*            type="password"*/}
            {/*            id="password"*/}
            {/*            value={password}*/}
            {/*            onChange={(e) => setPassword(e.target.value)}*/}
            {/*        />*/}
            {/*        <br/>*/}
            {/*        <button type="submit">登录</button>*/}

            {/*        <a href="/signup">Don't have an account? Sign up for one!</a>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </Fragment>

);
}

export default Login;