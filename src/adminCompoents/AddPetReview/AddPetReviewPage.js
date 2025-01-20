import { useRef, useState, useEffect } from "react";
import { Map, Marker, NavigationControl, InfoWindow, CityListControl, PanoramaControl, ScaleControl, ZoomControl, CustomOverlay } from 'react-bmapgl'
import { BASE_URL } from '../../config';
import NewPetTag from './NewPetTag'
import ReviewTag from './ReviewTag'

function AddPetReviewPage() {

    const [petawaitreview, setPetawaitreview] = useState([]);
    const [editpet, setEditpet] = useState(0);

    useEffect(() => {
        fetch(`${BASE_URL}/pet/selectAllByStatus/1`).then((response) => {
            return response.json();
        }).then((pets) => {
            setPetawaitreview(pets);
            console.log(pets);
        })
    }, [editpet])

    const petawaitreviewtags = petawaitreview.map((pet) => (
        <NewPetTag
            key={pet.petId}
            id={pet.petId}
            position={{ lng: pet.lng, lat: pet.lat }}
            name={pet.name}
            avatar={pet.avatar}
            handleClick={handleClick}
        />
    )
    )

    const [position, setPosition] = useState({ lng: 0, lat: 0 });
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [kind, setKind] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [description, setDescription] = useState('');

    const [reviewtagid, setReviewtagid] = useState();

    function handleClick(id) {
        console.log(id);
        fetch(`${BASE_URL}/pet/selectPetById/?petId=${id}`).then((response) => {
            return response.json();
        }).then((pet) => {
            setPosition({ lng: pet.lng, lat: pet.lat });
            setAvatar(pet.avatar);
            setName(pet.name);
            setKind(pet.kind);
            setAge(pet.age);
            setGender(pet.gender);
            setDescription(pet.description);

            setReviewtagid(pet.petId);
        })
    }


    async function passReview() {
        await fetch(`${BASE_URL}/pet/approve/${reviewtagid}/3`);
        setEditpet(prevEditpet => prevEditpet + 1);
        setPosition({ lng: 0, lat: 0 });
        setAvatar('');
        setName('');
        setKind('');
        setAge('');
        setGender('');
        setDescription('');
    }

    async function notpassReview() {
        await fetch(`${BASE_URL}/pet/approve/${reviewtagid}/2`)
        setEditpet(prevEditpet => prevEditpet + 1);
        setEditpet(prevEditpet => prevEditpet + 1);
        setPosition({ lng: 0, lat: 0 });
        setAvatar('');
        setName('');
        setKind('');
        setAge('');
        setGender('');
        setDescription('');
        
    }

    return (
        <div>
            <Map
                center={{ lng: 121.399, lat: 31.322 }}
                zoom={17}
                enableScrollWheelZoom={true}
                style={{ width: '80%', height: '100vh', right: '0', position: 'absolute' }}
                tilt={45}
            >
                <ScaleControl />
                <NavigationControl />

                {petawaitreviewtags}

                <ReviewTag

                    position={position}
                    avatar={avatar}
                    name={name}
                    kind={kind}
                    age={age}
                    gender={gender}
                    description={description}
                    passReview={passReview}
                    notPassReview={notpassReview}
                />

            </Map>

        </div>
    )
}

export default AddPetReviewPage;