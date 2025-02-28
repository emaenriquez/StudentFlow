import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/main/Home';
import Register from './pages/main/Register';
import Login from './pages/main/Login';
// paginas dashboard
import Dashboard from './pages/dashboard/Dashboard';
import Subjects from './pages/main/Subjects'
import ProtectedRoutes from './utils/ProtectedRoutes';
import { useLocalStorage } from 'react-use';

const App = () => {
  const [user,setUser] = useLocalStorage('user')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoutes canActive={user} redirectPath="/login" />}>
          <Route path="dashboard/:subjectsId/*" element={<Dashboard />} />
          <Route path="materials" element={<Subjects />}> </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;