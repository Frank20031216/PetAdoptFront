import React, { useState, useEffect } from 'react';
import UnhandledPetApplyingNode from './UnhandledPetApplyingNode';
import { BASE_URL } from '../../config';
import { useGlobalState } from './../../GlobalState';


function ApplicationhandlingPage() {


    const [unhandledpets, setUnhandledpets] = useState([]);
    const [editpet, setEditpet] = useState(0);

    useEffect(() => {
        fetch(`${BASE_URL}/pet/selectUnhandledPet`).then((response) => {
            return response.json();
        }).then((pets) => {
            setUnhandledpets(pets);
            // console.log(underhandledPets);
        });
    }, [editpet]);

    async function approval(id) {
        // 更新审核状态
        await fetch(`${BASE_URL}/pet/approve/${id}/6`);

        // 更新 editpet 状态，触发重新渲染
        setEditpet(prevEditpet => prevEditpet + 1);
    }

    const [position, setPosition] = useState({ lng: 0, lat: 0 });
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [kind, setKind] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [description, setDescription] = useState('');
    const [update, setUpdate] = useState(0);


    async function disapproval(id) {
        try {
            // 第一步：更新审核状态
            await fetch(`${BASE_URL}/pet/approve/${id}/5`);
    
            // 更新 editpet 状态，触发重新渲染
            setEditpet((prevEditpet) => prevEditpet + 1);
    
            // 第二步：重新获取宠物信息
            const response = await fetch(`${BASE_URL}/pet/selectPetById/?petId=${id}`);
            const pet = await response.json();
    
            console.log(pet);
    
            // 更新宠物信息
            updatePetInfo(pet);
        } catch (error) {
            console.error('Error in disapproval:', error);
        }
    }
    
    function updatePetInfo(pet) {
        setPosition({ lng: parseFloat(pet.lng).toFixed(5), lat: parseFloat(pet.lat).toFixed(5) });
        setAvatar(pet.avatar);
        setName(pet.name);
        setKind(pet.kind);
        setSpecies(pet.species);
        setAge(pet.age);
        setGender(pet.gender);
        setDescription(pet.description);
    }

    useEffect(() => {
        // 在所有状态更新完成后执行
        console.log(name, avatar, age, species, kind, gender, description, position.lng, position.lat);
        setUpdate((update) => update + 1);
    }, [name, avatar, age, species, kind, gender, description, position.lng, position.lat]);


    useEffect(() => {
        fetch(
            `${BASE_URL}/pet/insert/?&name=${name}&avatar=${avatar}&age=${age}&species=${species}&kind=${kind}&gender=${gender}&description=${description}&lng=${parseFloat(position.lng).toFixed(5)}&lat=${parseFloat(position.lat).toFixed(5)}&status=3`,
            { method: 'POST' },
        );

    }, [update]);



    const underhandledPetsList = unhandledpets.map(pet => {
        return (
            <UnhandledPetApplyingNode
                key={pet.petId}
                id={pet.petId}
                name={pet.name}
                avatar={pet.avatar}
                account={pet.account}
                approval={approval}
                disapproval={disapproval}
            />
        )
    });

    return (
        <div style={{ float: 'right', position: 'relative' }}>
            <h1>ApplicationhandlingPage</h1>
            {underhandledPetsList}
        </div>
    )
}

export default ApplicationhandlingPage;