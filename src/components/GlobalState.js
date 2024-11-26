//记录所有pet信息，全局变量
import React, { createContext, useContext, useState } from 'react';

// 创建上下文
const GlobalContext = createContext();

// 创建提供者组件
export const GlobalProvider = ({ children }) => {
    
    const [globalState, setGlobalState] = useState([
        {
            id: 1,
            avatar: "https://ts3.cn.mm.bing.net/th?id=OIP-C.Rk0shuvnCBQigO94QGlaogHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            name: "Luna",
            species: "Cat",
            lng: 13514423.81896,
            lat: 3652625.88005,
            age: 3,
            gender: "Female",
            description: "This is a beautiful cat, who loves playing with you and sleeping in your lap."
        },
        {
            id: 2,
            avatar: "https://tse4-mm.cn.bing.net/th/id/OIP-C.5xAgxwljfeS9C5bTx6pQuQHaEo?w=312&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            name: "Lucy",
            species: "Dog",
            lng: 13513764.06671 ,
            lat: 3652527.00853,
            age: 5,
            gender: "Female",
            description: "This is a loyal dog, who loves to play with you and cuddle you."
        },
        {
            id: 3,
            avatar: "https://ts1.cn.mm.bing.net/th?id=OIP-C.iNCJT9OS8Iv2yQnOVR-1NgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            name: "Max",
            species: "Cat",
            lng: 13514290.91378,
            lat: 3652015.56598,
            age: 2,
            gender: "Male",
            description: "This is a cute cat, who loves to play with you and sleep in your lap."
        },
        {
            id: 4,
            avatar: "https://tse3-mm.cn.bing.net/th/id/OIP-C.I4F8myLkyWhoOjdVlTZgvgAAAA?w=267&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            name: "Buddy",
            species: "Dog",
            lng: 13514214.45165 , 
            lat: 3651640.49596,
            age: 1,
            gender: "Male",
            description: "This is a loyal dog, who loves to play with you and cuddle you."
        },
        {
            id: 5,
            avatar: "https://tse4-mm.cn.bing.net/th/id/OIP-C.RhmN_4NwdOxF9ByVPExQngHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            name: "Pussy",
            species: "Cat",
            lng: 13513827.63842, 
            lat: 3651436.93253,
            age: 4,
            gender: "Female",
            description: "This is a beautiful cat, who loves playing with you and sleeping in your lap."
        }
    ]

);
const [position, setPosition] = useState({lng:10,lat:10});
    return (
        <GlobalContext.Provider value={{ globalState, setGlobalState,position, setPosition }}>
            {children}
        </GlobalContext.Provider>
    );
};


// 自定义 Hook 以便于访问上下文
export const useGlobalState = () => {
    return useContext(GlobalContext);
};

