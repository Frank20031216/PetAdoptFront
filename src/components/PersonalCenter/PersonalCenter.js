import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../compoentsCss/PersonalCenter.css'
import { BASE_URL } from '../../config';
import personalavatar from '../../img/头像.svg'
import AdoptedPetnode from './AdoptedPetnode';

function PersonalCenter() {

    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    const [userInformation, setUserInformation] = useState();
    const [token, setToken] = useState();

    const [adoptedPets, setAdoptedPets] = useState([]);
    useEffect(() => {
        setAccount(localStorage.getItem('account'));
        setPassword(localStorage.getItem('password'));
        fetch(`${BASE_URL}/user/getUserInformation/?account=${account}&password=${password}`).then((response) => {
            return response.json();
        }).then((user) => {
            setUserInformation(user[0]);
        });

        fetch(`${BASE_URL}/user/getAdoptedPetInformation/?account=${account}&password=${password}`).then((response) => {
            return response.json();
        }).then((pets) => {
            console.log(pets);
            setAdoptedPets(pets);
        });

        setToken(localStorage.getItem("token"));

    }, [account, password]);

    const adoptedPetsLists = adoptedPets.map((pet) => {
        return (
            <AdoptedPetnode
                key={pet.petId}
                id={pet.petId}
                avatar={pet.avatar}
                name={pet.name}
                species={pet.species}
                age={pet.age}
                gender={pet.gender}
                Viewdetails={Viewdetails}
            />
        )
    });

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
                    <div>
                        {adoptedPetsLists}
                    </div>

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
