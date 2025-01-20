import React, { useState, useEffect } from "react";
import { CustomOverlay } from 'react-bmapgl';
import './../../adminCompoentsCss/ReviewTag.css'

function ReviewTag(props) {
    return (
        <CustomOverlay position={props.position} coordType="bd09mc">
            <div className="review-tag">
                <img src={props.avatar} alt={props.avatar} />
                <ul>
                    <li>name: {props.name}</li>
                    <li>age: {props.age}</li>
                    <li>kind:{props.kind}</li>
                    <li>gender:{props.gender}</li>
                    <li>description: {props.description}</li>
                </ul>
                <button id = "passBtn" onClick={props.passReview}>通过</button>
                <button id = "notPassBtn" onClick={props.notPassReview}>不通过</button>
            </div>
        </CustomOverlay>
    )
}

export default ReviewTag;