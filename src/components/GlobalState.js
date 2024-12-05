//记录所有pet信息，全局变量
import React, { createContext, useContext, useState ,useEffect} from 'react';

// 创建上下文
const GlobalContext = createContext();


// 创建提供者组件
export const GlobalProvider = ({ children }) => {

    const [globalState, setGlobalState] = useState([]);

    const [editCount, setEditCount] = useState(0);

useEffect(() => {
  fetch("http://localhost:8080/pet/all").then((response) => {
    return response.json();
  }).then((pets) => {
    setGlobalState(pets);
    console.log(pets);
  })
}, [editCount])


const [position, setPosition] = useState({lng:10,lat:10});

    return (
        <GlobalContext.Provider value={{ globalState, setGlobalState,position, setPosition,editCount, setEditCount }}>
            {children}
        </GlobalContext.Provider>
    );
};


// 自定义 Hook 以便于访问上下文
export const useGlobalState = () => {
    return useContext(GlobalContext);
};

