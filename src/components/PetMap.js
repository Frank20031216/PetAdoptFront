import React from 'react';
import { Map, Marker, NavigationControl, InfoWindow, CityListControl, PanoramaControl, ScaleControl, ZoomControl, CustomOverlay } from 'react-bmapgl'
//需要关掉strict模式，否则会地图加载后便消失（详见https://juejin.cn/post/7426628755738624037）
import PetMapTag from './PetMapTag';
import { useGlobalState } from './GlobalState'
import { useNavigate, } from 'react-router-dom';
function PetMap() {
    const { globalState, setGlobalState } = useGlobalState();
    let navigate = useNavigate();

    const pettaglist = globalState.map(
        (pettag) => (
            <PetMapTag
                key={pettag.id}
                id={pettag.id}
                position={{ lng: pettag.lng, lat: pettag.lat }}
                name={pettag.name}
                avatar={pettag.avatar}
                JumpToPetInformation={JumpToPetInformation}
            />
        )
    )
    function JumpToPetInformation(id)
    {
        navigate(`/Information/id=${id}`);
    }

    return (
        <div>

            <Map
                center={{ lng: 121.399, lat: 31.322 }}
                zoom="17"
                enableScrollWheelZoom={true}
                style={{ width: '100%', height: '800px' }}
                tilt={45}>

                <ScaleControl />

                <NavigationControl />

                {pettaglist}


            </Map>
        </div>
    )
}

export default PetMap;