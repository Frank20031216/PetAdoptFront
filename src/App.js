import React, { useEffect, useState } from 'react';
import { GlobalProvider, useGlobalState } from './components/GlobalState';




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

function App() {

  const { globalState, setGlobalState} = useGlobalState();
  const PetInformationRouteList = globalState.map(
    (pet) => (
      <Route key={pet.id}
        path={`/Information/id=${pet.petId}`}
        element={<PetInformationNode petId={pet.petId} />}
      >
      </Route>
    )
  )


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
