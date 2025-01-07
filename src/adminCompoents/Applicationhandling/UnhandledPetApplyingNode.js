import React from 'react';
import './../../adminCompoentsCss/UnhandledPetApplyingNode.css';

function UnhandledPetApplyingNode(props) {
    return (
        <div class="unhandled-pet-applying-node">
            <ul>
                <li><img src={props.avatar} alt={props.name}></img></li>
                <li><span>{props.name}</span></li>
                <li><span>申请人：{props.account}</span></li>
                <label>备注:</label>
                <input type="text" ></input>
                <div class="button">
                    <button id="approval" onClick={
                        () => props.approval(props.id)}>
                        <span>通过</span>
                    </button>
                    <button id="disapproval" onClick={
                        () => props.disapproval(props.id)}>
                        <span>不通过</span>
                    </button>

                </div>
            </ul>
        </div>
    )
}

export default UnhandledPetApplyingNode;