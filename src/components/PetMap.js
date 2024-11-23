import React from 'react';
import { Map, Marker, NavigationControl, InfoWindow, Circle } from 'react-bmap'


function PetMap() {

    const PetTagList = [
        {
            name: "Luna",
            lng: 121.400,
            lat: 31.325,
        },
        {
            name: "Lucy",
            lng: 121.401,
            lat: 31.326,
        },
        {
            name: "Max",
            lng: 121.402,
            lat: 31.327,
        }
    ]

    const pettaglist = PetTagList.map(
        (pettag) => (
            <Circle
                position={{ lng: pettag.lng, lat: pettag.lat }}
                fillColor='blue'
                strokeColor='white'
                radius="300"
            />
        )
    )

    return (
        <div>
            <Map
                center={{ lng: 121.399, lat: 31.322 }}
                zoom="17"
                enableScrollWheelZoom={true}
                
                style={{ width: '100%', height: '750px' }}>
                <Marker position={{ lng: 121.399, lat: 31.322 }}
                 />

                <NavigationControl />

            </Map>
        </div>
    )
}

export default PetMap;