import React, { Component } from 'react';
import './../../compoentsCss/AdoptedPetnode.css'

function AdoptedPetnode(props) {
    return (
        <div className="AdoptedPetnode" onClick={() => props.Viewdetails(props.id)}>
            <img src={props.avatar} alt={props.name} />
            <ul>
                <li><span>name: </span>{props.name}</li>
                <li><span>species: </span>{props.species}</li>
                <li><span>age: </span>{props.age}</li>
                <li><span>gender: </span>{props.gender}</li>
            </ul>
        </div>
    )
}

export default AdoptedPetnode;