import React, { Component } from 'react';
import './../../compoentsCss/UnAdoptedPetNode.css'

function UnAdoptedPetNode(props) {
    return (
        <div className="UnAdoptedPetNode" onClick={() => props.Viewdetails(props.id)}>
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

export default UnAdoptedPetNode;