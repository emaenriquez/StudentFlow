import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
// paginas dashboard
import Dashboard from './pages/Dashboard/Dashboard';
import Subjects from './pages/Subjects'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/:subjectsId/*" element={<Dashboard />} />
        <Route path="/materials" element={<Subjects />}> </Route>
      </Routes>
    </Router>
  );
};

export default App;