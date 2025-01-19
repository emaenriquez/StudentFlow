// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Datos hardcodeados para autenticación
    const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = 'password123';

    if (formData.email === hardcodedEmail && formData.password === hardcodedPassword) {
      // Redirigir a Dashboard en caso de éxito
      navigate('/dashboard');
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Gmail:
          <input
            type="email"
            name="email"
            placeholder="Gmail"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            placeholder="contraseña"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;