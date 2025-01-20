import React, { useEffect, useState } from 'react';
import { GlobalProvider, useGlobalState } from './GlobalState';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,

} from 'react-router-dom';

import Topbar from './components/Topbar';
import Home from './components/Home/Home';
import Information from './components/information/Information';
import PetInformationNode from './components/information/PetInformationNode';
import AddPetPage from './components/Home/AddPetPage';
import Login from './components/Authorization/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Signup from './components/Authorization/Signup';
import PersonalCenter from './components/PersonalCenter/PersonalCenter';


import Sidebar from './adminCompoents/Sidebar'
import ApplicationhandlingPage from './adminCompoents/Applicationhandling/ApplicationhandlingPage'
import AddPetReviewPage from './adminCompoents/AddPetReview/AddPetReviewPage'


function App() {

  const { globalState, setGlobalState, token, setToken } = useGlobalState();
  const [identity, setIdentity] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setIdentity(localStorage.getItem("identity"));
  }, [token, identity]);

  const PetInformationRouteList = globalState.map(
    (pet) => (
      <Route key={pet.id}
        path={`/Information/id=${pet.petId}`}
        element={<PetInformationNode petId={pet.petId} />}
      >
      </Route>
    )
  )

  if (token === '1' && identity === "管理员")
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route path="/applicationhandling" element={<ApplicationhandlingPage />} />
            <Route path="/addpetreview" element={<AddPetReviewPage />} />
          </Routes>
        </div>
      </Router>
    )
  else
    return (
      <Router>
        <div class="App">
          <Topbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Information" element={<Information />} />
            {PetInformationRouteList}
            <Route path="/AddPetPage" element={<AddPetPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/personalcenter" element={<PersonalCenter />} />
          </Routes>
        </div>
      </Router>
    );


}

export default App;
