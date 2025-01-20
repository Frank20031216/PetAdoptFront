import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../adminCompoentsCss/Sidebar.css';


function Sidebar() {

    const navigate = useNavigate();
    function Logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('account');
        localStorage.removeItem('password');
        localStorage.removeItem('identity');
        navigate('/login');
        window.location.reload();
    }

    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            <nav>
                <ul>
                    <button onClick={() => { navigate(-1) }}> ⬅Back </button>
                    <li><a href="/addpetreview">AddPetReview</a></li>
                    <li><a href="/applicationhandling">ApplyHandling</a></li>
                    <button onClick={Logout}> Logout </button>

                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
