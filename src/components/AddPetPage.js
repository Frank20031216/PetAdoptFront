import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useGlobalState } from './GlobalState'
import '../compoentsCss/AddPetPage.css'



function AddPetPage() {
    //const location = useLocation();
    const { globalState,editCount, setEditCount} = useGlobalState();

    const navigate = useNavigate();
    const [location, setLocation] = useState(useLocation());
    console.log(location.state?.position);

const [name, setName] = useState("");
const [avatar, setAvatar] = useState("");
const [age, setAge] = useState("");
const [species, setSpecies] = useState("Cat");
const [gender, setGender] = useState("male");
const [description, setDescription] = useState("");


    function addPet(event) {
        console.log(name, age, species, gender, description);

        event.preventDefault();
        fetch("http://localhost:8080/pet/insert/?name=" + name + "&avatar=" + avatar + "&age=" 
            + age + "&species=" + species + "&gender=" + gender + "&description=" 
            + description + "&lng=" + location.state?.position.lng + "&lat=" + location.state?.position.lat,
            { method: 'POST' }).
            then(() => {
              console.log("添加成功");
              setEditCount(editCount + 1);
            })

        setName("");
        setAge("");
        setAvatar("");
        setSpecies("");
        setGender("");
        setDescription("");

        alert("Pet added successfully!");
        navigate("/");
    }
    return (
        <div class="AddPetPage" style={{ marginTop: "80px" }}>
            <form>
                <h1>Add a Pet</h1>
                <label>Name:</label>
                <input type="text"  value={name} onChange={(event) => {setName(event.target.value)}}></input><br></br>

                <label>Avatar:(请上传图像链接)</label>
                <input type="text" value={avatar} onChange={(event) => {setAvatar(event.target.value)}}></input>
                <br></br>
                
                <label>Age:</label>
                <input type="text" value={age} onChange={(event) => {setAge(event.target.value)}}></input>
                <br></br>

                <label>Description:</label>
                <input type="text" value={description} onChange={(event) => {setDescription(event.target.value)}}></input><br></br>

                <label>
                Species:
                    <select id = "species" name="selectspecies" defaultValue={"Cat"} value={species} onChange={(event) => {setSpecies(event.target.value)}}>
                        <option value="cat" >Cat</option>
                        <option value="dog" >Dog</option>
                    </select>
                </label>

                <label>
                Gander:
                    <select id = "gender" name="selectgender" defaultValue={"male"} value={gender} onChange={(event) => {setGender(event.target.value)}}>
                        <option value="male" >male</option>
                        <option value="female" >female</option>
                    </select>
                </label>


                <button type="submit" onClick={addPet}>submmit</button>
            </form>
            
        </div>
    )
}

export default AddPetPage;