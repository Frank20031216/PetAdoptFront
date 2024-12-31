import React from 'react';
import { useGlobalState } from '../GlobalState'

function PetInformationNode(props) {

    const { globalState } = useGlobalState();

    const filteredpet = globalState.filter(pet => pet.petId === props.petId);

    console.log(filteredpet);
    
    const PetPage = filteredpet.map((pet) => (
        <div>
            <ul key={pet.petId}>
                <li><h1>{pet.name}</h1></li>
                <li><img src={pet.avatar} alt={pet.name}></img></li>
                <li><span>species:{pet.species}</span></li>
                <li><span>age:{pet.age}</span></li>
                <li><span>gender:{pet.gender}</span></li>
                <li><span>description:{pet.description}</span></li>
                <div class="button">
                    <button onClick={
                        () => {alert('申请领养成功！')}}>
                        <span>申请领养</span>
                    </button>
                </div>
            </ul>
        </div>
    ))

    return (
        <div class="pet-list" style={{ marginTop: '50px' }}>
            {PetPage}
        </div>
    )
}

export default PetInformationNode;