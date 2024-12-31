import React from 'react';
import '../../compoentsCss/PetNode.css';

function PetNode(props) {
    
    return (
        <div class="pet-list" >
            <ul>
                <li><h1>{props.name}</h1></li>
                <li><img src={props.avatar} alt={props.name}></img></li>
                
                <div class="button">
                    <button onClick={
                        () => props.ViewDetail(props.id)}>
                        <span>点击查看详情</span>
                    </button>
                </div>
            </ul>

        </div>
    )
}

export default PetNode;