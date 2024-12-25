import React,{ useEffect } from 'react';
import PetMap from './PetMap'
import PetInformationNode from './PetInformationNode';

import { useGlobalState } from './GlobalState';
import { useNavigate } from "react-router-dom";

function Home() {

    const { token, setToken } = useGlobalState();
    /*const saveToken = localStorage.getItem("token");
    setToken(saveToken);
    console.log(saveToken);*/
    const navigate = useNavigate();

    useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("token: ", token);
    }, []);
    
    if (token === '1') {
        return (

            <div>
                <PetMap />
            </div>
        )
    }
    else {
        //alert("Please login first");
        navigate('/login');
    }
}

export default Home;