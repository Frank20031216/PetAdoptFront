import React from 'react';
import { useRef, useState, useEffect } from "react";
import { Map, Marker, NavigationControl, InfoWindow, CityListControl, PanoramaControl, ScaleControl, ZoomControl, CustomOverlay } from 'react-bmapgl'
//需要关掉strict模式，否则会地图加载后便消失（详见https://juejin.cn/post/7426628755738624037）
import PetMapTag from './PetMapTag';
import AddPetTag from './AddPetTag';
import { useGlobalState } from '../../GlobalState'
import { useNavigate, } from 'react-router-dom';
import { } from 'react-router'

function PetMap(props) {

    const { globalState} = useGlobalState();
    const [position, setPosition] = useState({ lng: 0, lat: 0 });

    let navigate = useNavigate();

    function JumpToPetInformation(petId) {

        navigate(`/Information/id=${petId}`)
    }
    function JumpToAddPetPage() {
        navigate("/AddPetPage",{state:{position:position}})
    }
    
    console.log(position);
    function handleRighgtClick(event) {
        // 获取右键点击的墨卡托坐标系
        const x = event.point.lng;
        const y = event.point.lat;
        /*const bd09Lng = (x / 20037508.34) * 180; // 将 X 坐标转换为经度
        const bd09Lat = (Math.atan(Math.exp(y / 20037508.34 * Math.PI)) * 360 / Math.PI) - 90;
        const bd09ConvertedLng = bd09Lng + 0.0065;  // BD09 的偏移
        const bd09ConvertedLat = bd09Lat + 0.006;   // BD09 的偏移
        console.log('经度:', bd09ConvertedLng, '纬度:', bd09ConvertedLat);
        setPosition({ lng: bd09ConvertedLng, lat: bd09ConvertedLat });*/
        console.log('经度:', x, '纬度:', y);
        window.removeEventListener("click", handleRighgtClick);
        setPosition({ lng: x, lat: y });
        console.log(position);
        //window.removeEventListener("click", handleRighgtClick);
    }

    const pettaglist = globalState.map(
        (pettag) => (
            <PetMapTag
                key={pettag.petId}
                id={pettag.petId}
                position={{ lng: pettag.lng, lat: pettag.lat }}
                name={pettag.name}
                avatar={pettag.avatar}
                JumpToPetInformation={JumpToPetInformation}
            />
        )
    )


    return (
        <div>
            <Map
                center={{ lng: 121.399, lat: 31.322 }}
                zoom="17"
                enableScrollWheelZoom={true}
                style={{ width: '100%', height: '100vh' }}
                tilt={45}

                onRightclick={handleRighgtClick}>

                <ScaleControl />

                <NavigationControl />

                {pettaglist}
                <AddPetTag position={position} JumpToAddPetPage = {JumpToAddPetPage}/>

            </Map>
        </div>
    )


}


export default PetMap;