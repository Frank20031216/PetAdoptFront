import React from 'react';
import { useGlobalState } from '../../GlobalState'
import { BASE_URL } from './../../config'
import { useNavigate } from 'react-router-dom';

function PetInformationNode(props) {

    const { globalState, editCount, setEditCount } = useGlobalState();

    const filteredpet = globalState.filter(pet => pet.petId === props.petId);
    const navigate = useNavigate();

    async function submitapply(petId) {
        const postdata = {
            petId: petId,
            status: 4,
            belonging: localStorage.getItem('userId')
        }
        await fetch(`${BASE_URL}/pet/updateAllWithJson`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postdata)
            }
        )
        setEditCount(editCount + 1)
        alert('申请成功，请等待管理员审核')
        navigate(-1)
    }

    async function cancelapply(petId) {
        const postdata = {
            petId: petId,
            status: 3,
            belonging: null
        }
        await fetch(`${BASE_URL}/pet/updateAllWithJson`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postdata)
            }
        )
        setEditCount(editCount + 1)
        alert('取消申请成功')
        navigate(-1)
    }

    const PetPage = filteredpet.map((pet) => (
        <div>
            <ul key={pet.petId}>
                <li><h1>{pet.name}</h1></li>
                <li><img src={pet.avatar} alt={pet.name}></img></li>
                <li><span>species:{pet.species}</span></li>
                <li><span>age:{pet.age}</span></li>
                <li><span>gender:{pet.gender}</span></li>
                <li><span>description:{pet.description}</span></li>
                <div className="button">
                    {pet.status == 3 && (
                        <button onClick={() => submitapply(pet.petId)}>
                            <span>申请领养</span>
                        </button>
                    )}
                </div>
                <div className="button">
                    {pet.status == 4 && (
                        <button onClick={() => cancelapply(pet.petId)}>
                            <span>取消申请领养</span>
                        </button>
                    )}
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