import React from 'react';
import { useState, useRef, useEffect } from "react";
import { useGlobalState } from './GlobalState'
import PetNode from './PetNode';
import { useNavigate } from 'react-router-dom';

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
    const { token, setToken } = useGlobalState();
    useEffect(() => {
        setToken(localStorage.getItem("token"));
        console.log("token: ", token);
    }, []);

    if (token === '1') {
        return (
            <div class="infomation-container" style={{ marginTop: '80px',height:'50rem', overflowY: 'auto' }}>
                
                {PetList}
            </div>
        );
    }
    else {
        //alert("Please login first");
        navigate('/login');
    }
}

export default Information;