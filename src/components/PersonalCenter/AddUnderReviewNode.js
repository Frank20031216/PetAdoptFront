import React, { Component } from 'react';
import './../../compoentsCss/AddUnderReviewNode.css'

function AddUnderReviewNode(props) {
    return (
        <div className="AddUnderReviewNode" onClick={() => props.Viewdetails(props.id)}>
            <img src={props.avatar} alt={props.name} />
            <ul>
                <li><span>name: </span>{props.name}</li>
                <li><span>species: </span>{props.species}</li>
                <li><span>age: </span>{props.age}</li>
                <li><span>gender: </span>{props.gender}</li>
                <li><span>lng: </span>{props.lng}</li>
                <li><span>lat: </span>{props.lat}</li>
                <li><span>description: </span>{props.description}</li>
            </ul>
        </div>
    )
}
export default AddUnderReviewNode;
