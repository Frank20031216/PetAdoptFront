import React from 'react';
import { useState, useRef, useEffect } from "react";
import { useGlobalState } from './GlobalState'
import PetNode from './PetNode';
import {useNavigate,} from 'react-router-dom';

function Information() {

    const { globalState, setGlobalState } = useGlobalState();


    let navigate = useNavigate();
    function ViewDetail(id) {
        navigate(`/Information/id=${id}`)
    }

    const PetList = globalState.map(
        (pet) => (
            <PetNode
                key={pet.id}
                id={pet.id}
                avatar={pet.avatar}
                name={pet.name}
                ViewDetail={ViewDetail}
            />
        )
    )

    return (

        <div class="infomation-container" style={{ marginTop: '50px' }}>
            {PetList}
        </div>
    );
}

export default Information;