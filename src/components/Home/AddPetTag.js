import React, { useState ,useEffect} from "react";
import { CustomOverlay } from 'react-bmapgl';

import '../../compoentsCss/AddPetTag.css'

function AddPetTag(props) {


    return (
        <CustomOverlay

            position={props.position}
            coordType="bd09mc">
            <div class="add-pet-tag" >
                <button
                    style={{ width: '60px', height: '30px' }}
                    onClick={props.JumpToAddPetPage}
                >AddPet</button>
            </div>
            
        </CustomOverlay>
    )


}

export default AddPetTag;