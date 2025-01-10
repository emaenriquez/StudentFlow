import { Typography, Button, Input } from "@material-tailwind/react";

const AuthForm = ({ role, type }) => {
  const isTeacher = role === 'teacher';
  const isRegister = type === 'register';

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="text-center mb-4">
        {isRegister ? `Registro de ${isTeacher ? 'Profesor' : 'Alumno'}` : `Inicio de Sesión de ${isTeacher ? 'Profesor' : 'Alumno'}`}
      </Typography>
      <form className="flex flex-col items-center">
        {isRegister && <Input type="text" placeholder="Nombre" className="mb-4" />}
        <Input type="email" placeholder="Correo Electrónico" className="mb-4" />
        <Input type="password" placeholder="Contraseña" className="mb-4" />
        <Button variant="gradient" size="sm">
          {isRegister ? 'Registrarse' : 'Iniciar Sesión'}
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;