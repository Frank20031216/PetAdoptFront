import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../compoentsCss/PersonalCenter.css'
import { BASE_URL } from '../../config';
import personalavatar from '../../img/头像.svg'
import AdoptedPetNode from './AdoptedPetNode';
import UnAdoptedPetNode from './UnAdoptedPetNode';
import AddUnderReviewNode from './AddUnderReviewNode';


function PersonalCenter() {

    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    const [userInformation, setUserInformation] = useState();
    const [token, setToken] = useState();
    const [userId, setUserId] = useState();
    // const [belonging, setBelonging] = useState();

    const [adoptedPets, setAdoptedPets] = useState([]);
    const [unAdoptedPets, setUnAdoptedPets] = useState([]);
    const [addUnderReviewPets, setAddUnderReviewPets] = useState([]);

    useEffect(() => {
        setAccount(localStorage.getItem('account'));
        setPassword(localStorage.getItem('password'));
        setUserId(localStorage.getItem('userId'));

        fetch(`${BASE_URL}/user/getUserInformation/?account=${account}&password=${password}`).then((response) => {
            return response.json();
        }).then((user) => {
            setUserInformation(user[0]);
        });

        fetch(`${BASE_URL}/user/getAdoptedPetInformation/?account=${account}&password=${password}`).then((response) => {
            return response.json();
        }).then((pets) => {
            setAdoptedPets(pets);
        });

        fetch(`${BASE_URL}/pet/selectAllByStatusAndBelonging/?status=4&belonging=${userId}`).then((response) => {
            return response.json();
        }).then((unadoptedpets) => {
            setUnAdoptedPets(unadoptedpets);
        });

        fetch(`${BASE_URL}/pet/selectAllByStatusAndBelonging/?status=1&belonging=${userId}`).then((response) => {
            return response.json();
        }).then((addunderreviewpets) => {
            setAddUnderReviewPets(addunderreviewpets);
        });

        setToken(localStorage.getItem("token"));

    }, [account, password]);


    const adoptedPetsLists = useMemo(() => {
        const pets = Array.isArray(adoptedPets) ? adoptedPets : [];
        return pets.map((pet) => (
            <AdoptedPetNode
                key={pet.petId}
                id={pet.petId}
                avatar={pet.avatar}
                name={pet.name}
                species={pet.species}
                age={pet.age}
                gender={pet.gender}
                Viewdetails={Viewdetails}
            />
        ));
    }, [adoptedPets]);

    const unAdoptedPetsLists = useMemo(() => {
        const pets = Array.isArray(unAdoptedPets) ? unAdoptedPets : [];
        return pets.map((pet) => (
            <UnAdoptedPetNode
                key={pet.petId}
                id={pet.petId}
                avatar={pet.avatar}
                name={pet.name}
                species={pet.species}
                age={pet.age}
                gender={pet.gender}
                Viewdetails={Viewdetails}

            />
        ));
    }, [unAdoptedPets]);

    const addUnderReviewPetsLists = useMemo(() => {
        // 确保 addUnderReviewPets 是一个数组
        const pets = Array.isArray(addUnderReviewPets) ? addUnderReviewPets : [];
        return pets.map((pet) => (
            <AddUnderReviewNode
                key={pet.petId}
                id={pet.petId}
                avatar={pet.avatar}
                name={pet.name}
                species={pet.species}
                age={pet.age}
                gender={pet.gender}
                lng={pet.lng}
                lat={pet.lat}
                description={pet.description}
                Viewdetails={Viewdetails}

            />
        ));
    }, [addUnderReviewPets]);

    function Viewdetails(id) {
        navigate(`/Information/id=${id}`);
    }

    let navigate = useNavigate();

    if (token === '1') {
        if (userInformation) {
            return (
                
                <div className="personal-center">
                    <div className="info">
                        <img src={personalavatar} alt="personalavatar" />
                        <p>Account: {userInformation.account}</p>
                        <p>Nickame: {userInformation.nickname}</p>
                        <p>Email: {userInformation.email}</p>
                        <p>Phone: {userInformation.phone}</p>
                    </div>

                    {adoptedPetsLists.length > 0 &&
                        (
                            <div>
                                <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px 0' }}>您已领养的宠物:</p>
                                {adoptedPetsLists}
                            </div>
                        )
                    }

                    {unAdoptedPetsLists.length > 0 &&
                        (
                            <div>
                                <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px 0' }}>您领养的宠物(待审核):</p>
                                {unAdoptedPetsLists}
                            </div>
                        )
                    }

                    {addUnderReviewPetsLists.length > 0 &&
                        (
                            <div>
                                <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px 0' }}>您发现的小动物(待审核):</p>
                                {addUnderReviewPetsLists}
                            </div>
                        )
                    }
                    
                </div>
            )
        }
    }
    else {
        //alert("Please login first");
        navigate('/login');
    }

}

export default PersonalCenter;
