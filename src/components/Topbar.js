import React from 'react';
import '../compoentsCss/Topbar.css';
import { useNavigate } from 'react-router-dom';
function Topbar() {
    const navigate = useNavigate();
    return (
        <div class="topbar">
            
            <nav>
                <ul>
                    <button onClick={() => {navigate(-1)}}> ⬅Back </button>
                    <li><a href="/" >Home</a></li>
                    <li><a href="/Information">Information</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li id="login"><a href="/login">Login</a></li>
                </ul>
            </nav>

        </div>
    )
}



export default Topbar;