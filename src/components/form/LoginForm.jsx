import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../inputFile/InputFile';
import ButtonForm from '../buttonForm/ButtonForm'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Datos hardcodeados para autenticación
        const hardcodedEmail = 'user@example.com';
        const hardcodedPassword = 'password123';

        if (formData.email === hardcodedEmail && formData.password === hardcodedPassword) {
            // Redirigir a materials en caso de éxito
            navigate('/materials');
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Iniciar sesión en tu cuenta
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <InputField
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        label="Email address"
                        placeholder="Ingresa tu email"
                    />
                    <InputField
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        autoComplete="current-password"
                        label="Password"
                        placeholder="Ingresa tu contraseña"
                    />
                    <ButtonForm text={"Iniciar sesión"}></ButtonForm>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;