import React from'react';
import "../../compoentsCss/Topbar.css"
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    function Logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('account');
        localStorage.removeItem('password');
        localStorage.removeItem('identity');
        localStorage.removeItem('userId');
    navigate('/login'); 
    }

    
    return (
        <li id="logout"><a onClick={Logout}>Logout</a></li>
    )
    }
    export default Logout;