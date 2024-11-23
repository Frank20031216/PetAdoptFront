import React from'react';
import './PetNode.css';

function PetNode(props) {
    return (
        <div class = "pet-list">
            <ul>
                <li><span>{props.name}</span></li>
                <li><img src={props.avatar} alt = {props.name}></img></li>
                <li><span>{props.location}</span></li>
                <li><span>{props.species}</span></li>
                <li><span>{props.age}</span></li>
                <li><span>{props.gender}</span></li>
                <div class="button">
                    <button onClick={
                        ()=>props.ApplyAdoption(props.id)}>
                        <span>申请领养</span>
                    </button>
                </div>
            </ul>
            
        </div>
        )
        }

export default PetNode;