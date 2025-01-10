import React from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const RoleSelection = ({ action }) => {
  const isRegister = action === 'register';

  return (
    <div className="container mx-auto p-4 text-center">
      <Typography variant="h4" className="mb-4">
        {isRegister ? 'Seleccione su rol para registrarse' : 'Seleccione su rol para iniciar sesión'}
      </Typography>
      <div className="flex justify-center space-x-4">
        <Link to={isRegister ? "/register-teacher" : "/login-teacher"}>
          <Button variant="gradient" size="lg">
            {isRegister ? 'Registrarse como Profesor' : 'Iniciar Sesión como Profesor'}
          </Button>
        </Link>
        <Link to={isRegister ? "/register-student" : "/login-student"}>
          <Button variant="gradient" size="lg">
            {isRegister ? 'Registrarse como Alumno' : 'Iniciar Sesión como Alumno'}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RoleSelection;