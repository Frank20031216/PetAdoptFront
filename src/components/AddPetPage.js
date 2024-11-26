import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import '../compoentsCss/AddPetPage.css'

function AddPetPage() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log("Jump To AddPetPage Successfilly");
    console.log(location.state?.position);

    function addPet(event) {
        alert("Pet added successfully!");
        navigate("/");
    }
    return (
        <div class="AddPetPage" style={{marginTop: "80px"}}>
            <form>    
            <h1>Add a Pet</h1>
            <label>Name:</label>
            <input type="text" ></input><br></br>
            <label>Age:</label>
            <input type="text" ></input>

            <button onClick={addPet}>submmit</button>
            </form>
            <h2>{location.state?.position.lng}, {location.state?.position.lat}</h2>
        </div>
    )
    }

export default AddPetPage;