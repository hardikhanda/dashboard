import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components

import Dashboard from './pages/dashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;