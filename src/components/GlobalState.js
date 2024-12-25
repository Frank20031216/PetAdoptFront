//记录所有pet信息，全局变量
import React, { createContext, useContext, useState ,useEffect} from 'react';
import { use } from 'react';

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

const [user,setUser] = useState({name:"",password:""});
const [token ,setToken] = useState('0');

useEffect(() => {

  const savedToken = localStorage.getItem("token");
  if (savedToken) {
    setToken(savedToken);
    return; // 如果有 token，更新状态并退出函数
  }
}, []);

    return (
        <GlobalContext.Provider value={{ globalState, setGlobalState,position, setPosition,editCount, setEditCount,user,setUser ,token ,setToken}}>
            {children}
        </GlobalContext.Provider>
    );
};


// 自定义 Hook 以便于访问上下文
export const useGlobalState = () => {
    return useContext(GlobalContext);
};

