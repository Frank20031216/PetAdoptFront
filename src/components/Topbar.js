import React from 'react';
import '../compoentsCss/Topbar.css';
function Topbar() {
    return (
        <div class="topbar">
            
            <nav>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="/Information">Information</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

        </div>
    )
}



export default Topbar;