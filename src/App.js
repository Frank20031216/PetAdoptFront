import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Topbar from './components/Topbar';
import Home from './components/Home';
import Information from './components/Information.js';

function App() {
  return (
    <Router>
      <div class="App">
        <Topbar />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Information" element={<Information />} />
          </Routes>
        </div>
      </div>
      </Router>
  );
}

export default App;
