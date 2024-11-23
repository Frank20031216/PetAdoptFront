import React from 'react';
import { GlobalProvider, useGlobalState } from './components/GlobalState';
import PetInformationNode from './components/PetInformationNode';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

import Topbar from './components/Topbar';
import Home from './components/Home';
import Information from './components/Information';


function App() {

  const { globalState, setGlobalState } = useGlobalState();
  const PetInformationRouteList = globalState.map(
    (pet) => (

      <Route key={pet.id}
        path={`/Information/id=${pet.id}`}
        element={<PetInformationNode id={pet.id} />}
      >
      </Route>

    )
  )

  return (
    <Router>
      <div class="App">
        <Topbar />
        <div>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/Information" element={<Information />} />
            {PetInformationRouteList}

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
