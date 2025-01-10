import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AuthForm from './components/Form/AuthForm';
import RoleSelection from './components/Form/RoleSelection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role-selection-register" element={<RoleSelection action="register" />} />
        <Route path="/role-selection-login" element={<RoleSelection action="login" />} />
        <Route path="/register-teacher" element={<AuthForm role="teacher" type="register" />} />
        <Route path="/register-student" element={<AuthForm role="student" type="register" />} />
        <Route path="/login-teacher" element={<AuthForm role="teacher" type="login" />} />
        <Route path="/login-student" element={<AuthForm role="student" type="login" />} />
      </Routes>
    </Router>
  );
};

export default App;