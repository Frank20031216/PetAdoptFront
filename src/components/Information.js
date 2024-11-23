import React from 'react';
import { useState, useRef, useEffect } from "react";
import PetNode from './PetNode';

function Information() {

    //const [petlist, setpetlist] = useState([]);
    const petlist=([
        {
            id: 1,
            avatar: "https://ts3.cn.mm.bing.net/th?id=OIP-C.Rk0shuvnCBQigO94QGlaogHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            name: "Luna",
            species: "Cat",
            location: "San Francisco",
            age: 3,
            gender: "Female"
        },
        {
            id: 2,
            avatar: "https://tse4-mm.cn.bing.net/th/id/OIP-C.5xAgxwljfeS9C5bTx6pQuQHaEo?w=312&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            name: "Lucy",
            species: "Dog",
            location: "New York",
            age: 5,
            gender: "Female"
        },
        {
            id: 3,
            avatar: "https://ts1.cn.mm.bing.net/th?id=OIP-C.iNCJT9OS8Iv2yQnOVR-1NgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            name: "Max",
            species: "Cat",
            location: "Los Angeles",
            age: 2,
            gender: "Male"
        },
        {
            id: 4,
            avatar: "https://tse3-mm.cn.bing.net/th/id/OIP-C.I4F8myLkyWhoOjdVlTZgvgAAAA?w=267&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            name: "Buddy",
            species: "Dog",
            location: "Chicago",
            age: 1,
            gender: "Male"
        }
    ]
    )
    const PetList = petlist.map(
        (pet) => (
            <PetNode
                key={pet.id}
                id={pet.id}
                avatar={pet.avatar}
                name={pet.name}
                species={pet.species}
                location={pet.location}
                age={pet.age}
                gender={pet.gender}
            />
        )
    )

    return (
        <div class="pet-information">
            <h1>Pet Information</h1>
            {PetList}
        </div>
    );
}

export default Information;