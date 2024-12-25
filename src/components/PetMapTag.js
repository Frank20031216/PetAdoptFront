import React from 'react';
import { CustomOverlay } from 'react-bmapgl';
import '../compoentsCss/PetMapTag.css'

function PetMapTag(props) {
    return (
        <CustomOverlay  position={props.position} coordType="bd09mc">
            <div class="pet-tag" >
                <img 
                onClick={() => {props.JumpToPetInformation(props.id)}} 
                alt = {props.name} src={props.avatar}
                />

            </div>
        </CustomOverlay>
    )
}

export default PetMapTag;