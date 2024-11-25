import React, { useState } from "react";
import { CustomOverlay } from 'react-bmapgl';
import {BrowserRouter,useNavigate,useHistory,Link} from 'react-router-dom';

function AddPetTag(props) {

    let navigate = useNavigate();
    function JumpToAddPetPage() {
        navigate("/AddPetPage")
    }
    return (
            <CustomOverlay  
            
            position={props.position} 
            coordType="bd09mc">
            <div class="add-pet-tag" >
                <button 
                style={{width:'60px',height:'30px'}}
                onClick={JumpToAddPetPage}
                 >AddPet</button>

                 <BrowserRouter>
                 <nav>
                 <Link to="/AddPetPage">AddPet</Link>
                 </nav>
                 </BrowserRouter>
                 
            </div>
        </CustomOverlay>
    )
}

export default AddPetTag;