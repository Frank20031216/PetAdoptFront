import React,{ useEffect,useState } from 'react';
import PetMap from './PetMap'
import AnnouncementWindow from '../Announcement/AnnouncementWindow'

import { useGlobalState } from '../../GlobalState';
import { useNavigate } from "react-router-dom";

function Home() {

    const { token, setToken } = useGlobalState();
    const navigate = useNavigate();



    useEffect(() => {
    setToken(localStorage.getItem("token"));
    
    }, []);
    
    if (token === '1') {
        return (
            <div>
                <PetMap />
                <AnnouncementWindow />
            </div>
        )
    }
    else {
        //alert("Please login first");
        navigate('/login');
    }
}

export default Home;