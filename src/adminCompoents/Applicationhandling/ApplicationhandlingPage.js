import React, { useState, useEffect } from 'react';
import UnhandledPetApplyingNode from './UnhandledPetApplyingNode';
import { BASE_URL } from '../../config';
import { useGlobalState } from './../../GlobalState';


function ApplicationhandlingPage() {


    const[unhandledpets, setUnhandledpets] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/pet/selectUnhandledPet`).then((response) => {
            return response.json();
        }).then((pets) => {
            setUnhandledpets(pets);
            // console.log(underhandledPets);
        });
    }, []);

    const underhandledPetsList = unhandledpets.map(pet => {
        return (
            <UnhandledPetApplyingNode
            key={pet.petId} 
            id={pet.petId} 
            name={pet.name} 
            avatar={pet.avatar} 
            account={pet.account} />
        )
    });

        return (
            <div style={{float: 'right',position:'relative'}}>
                <h1>ApplicationhandlingPage</h1>
                {underhandledPetsList}
            </div>
        )
    }

export default ApplicationhandlingPage;