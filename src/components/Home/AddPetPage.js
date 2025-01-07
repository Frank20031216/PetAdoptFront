import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useGlobalState } from '../../GlobalState'
import '../../compoentsCss/AddPetPage.css'
import { BASE_URL} from '../../config';


function AddPetPage() {
    //const location = useLocation();
    const { globalState, editCount, setEditCount } = useGlobalState();

    const navigate = useNavigate();
    const [location, setLocation] = useState(useLocation());
    console.log(location.state?.position);

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [age, setAge] = useState("");
    const [species, setSpecies] = useState("狸花猫");
    const [kind, setKind] = useState("cat");
    const [gender, setGender] = useState("male");
    const [description, setDescription] = useState("");


    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };

    function addPet(event) {
        console.log(name, age, species, gender, description);

        event.preventDefault();
        fetch(`${BASE_URL}/pet/insert/?name=` + name + "&avatar=" + avatar + "&age="
            + age + "&species=" + species+ "&kind=" + kind + "&gender=" + gender + "&description="
            + description + "&lng=" + location.state?.position.lng + "&lat=" + location.state?.position.lat +"&status=6",
            { method: 'POST' }).
            then(() => {
                console.log("添加成功");
                setEditCount(editCount + 1);
            })


            const formData = new FormData();
            formData.append('file', file);
            try {
              const response = fetch('${BASE_URL}/files/upload', { // 假设Spring Boot应用运行在8080端口
                method: 'POST',
                body: formData,
              });
              const data = response.json();
              console.log(data);
            } catch (error) {
              console.error('Error uploading file:', error);
            }

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
                <input type="text" value={name} onChange={(event) => { setName(event.target.value) }}></input><br></br>

                <label>Avatar:</label>
                
                    <input type="file" name="file" onChange={handleFileChange} />
                    <input type="text" value={avatar} onChange={(event) => { setAvatar(event.target.value) }}></input>
                
                <br></br>

                <label>Age:</label>
                <input type="text" value={age} onChange={(event) => { setAge(event.target.value) }}></input>
                <br></br>

                <label>Description:</label>
                <input type="text" value={description} onChange={(event) => { setDescription(event.target.value) }}></input><br></br>


                <label>
                    kind:
                    <select id="kind" name="selectkind"  value={kind} onChange={(event) => { setKind(event.target.value) }}>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    </select>
                </label>

                <label>
                    Species:
                    <select id="species" name="selectspecies" defaultValue={"Cat"} value={species} onChange={(event) => { setSpecies(event.target.value) }}>
                        {kind === "dog"?
                        <>
                        <option value="中华田园犬">中华田园犬</option>
                        <option value="哈士奇犬" >哈士奇犬</option>
                        <option value="吉娃娃犬" >吉娃娃犬</option>
                        <option value="贵宾犬" >贵宾犬</option>
                        <option value="比熊犬" >比熊犬</option>
                        <option value="柯基犬" >柯基犬</option>
                        <option value="比熊犬" >比熊犬</option>
                        <option value="牧羊犬" >牧羊犬</option>
                        <option value="金毛寻回犬" >金毛寻回犬</option>
                        <option value="拉布拉多犬" >拉布拉多寻回犬</option>
                        <option value="其他犬类" >其他犬类</option>
                        </>
                        :
                        <>
                        <option value="狸花猫" >狸花猫</option>
                        <option value="橘猫" >橘猫</option>
                        <option value="波斯猫" >波斯猫</option>
                        <option value="英国短毛猫" >英国短毛猫</option>
                        <option value="美国短毛猫" >美国短毛猫</option>
                        <option value="布偶猫" >布偶猫</option>
                        <option value="缅因猫" >缅因猫</option>
                        <option value="其他猫类" >其他猫类</option>
                        </>
                        }
                    </select>
                </label>


                <label>
                    Gander:
                    <select id="gender" name="selectgender" defaultValue={"male"} value={gender} onChange={(event) => { setGender(event.target.value) }}>
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