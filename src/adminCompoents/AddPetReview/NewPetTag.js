import React from 'react';
import { CustomOverlay } from 'react-bmapgl';
import './../../compoentsCss/PetMapTag.css'

function NewPetTag(props) {

    return (
            <CustomOverlay  position={props.position} coordType="bd09mc">
                <div class="pet-tag" >
                    <img 
                    onClick={() => {props.handleClick(props.id)}} 
                    alt = {props.name} src={props.avatar}
                    />
                    
                </div>
            </CustomOverlay>
        )
    }


export default NewPetTag;