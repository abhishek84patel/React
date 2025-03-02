import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App.jsx';
import Home from './components/Home';
import About from './components/About-us.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
