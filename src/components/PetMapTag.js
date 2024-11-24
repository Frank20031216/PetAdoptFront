import React from 'react';
import { CustomOverlay } from 'react-bmapgl';

function PetMapTag(props) {
    return (
        <CustomOverlay  position={props.position}>
            <div style={{ width: 60, height: 60 }}>
                <img onClick={() => {props.JumpToPetInformation(props.id)}} alt = {props.name} src={props.avatar}/>
            </div>
        </CustomOverlay>
    )
}

export default PetMapTag;