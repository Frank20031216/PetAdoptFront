import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../compoentsCss/Login.css"
import { BASE_URL} from '../../config';


function Signup() {
    const [account, setAccount] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();
    const handleSignup = (event) => {

        event.preventDefault();


        if (password !== confirmPassword) {
            alert("两次密码输入不一致");
            //setUsername('');
            setPassword('');
            setConfirmPassword('');
            //setEmail('');
            return;
        }

        else {
            fetch(`${BASE_URL}/user/check/?account=` + account,
                { method: 'POST' }).
                then((response) => {
                    console.log(response.json().then((res) => {
                        console.log(res);
                        if (res == true) {
                            alert("用户名已存在");
                            setAccount('');
                            setPassword('');
                            setConfirmPassword('');
                            
                            return;

                        }
                        else {
                            fetch(`${BASE_URL}/user/insert/?account=` + account +
                                "&password=" + password + "&email=" + email + "&identity=用户" + 
                                "&phone=" + phone + "&nickname=" + nickname,
                                { method: 'POST' }).
                                then(() => {
                                    console.log("添加成功");
                                })

                            alert("注册成功");
                            navigate("/Login");
                        }
                    }))
                })

        }
    };


    return (
        <div class="Loginpage">
            <form onSubmit={handleSignup} >

                <h1>SIGN UP</h1>
                <label htmlFor="username">account:</label>
                <input
                    type="text"
                    id="username"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                />

                <label htmlFor="nickname">nickname:</label>
                <input
                    type="text"
                    id="nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />


                <label htmlFor="password">password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="confirmPassword">confirm password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <label htmlFor="email">email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="phone">phone:</label>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <button type="submit">注册</button>


            </form>
        </div>
    );
}

export default Signup;