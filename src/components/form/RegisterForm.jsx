import { useState } from 'react';
import InputField from '../inputFile/InputFile';
import ButtonForm from '../buttonForm/ButtonForm';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envío del formulario
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Registrase
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <InputField
                        id="username"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        label="Nombre de usuario"
                        placeholder="Ingresa tu nombre de usuario"
                    />
                    <InputField
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        label="Email"
                        placeholder="Ingresa tu email"
                    />
                    <InputField
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        autoComplete="new-password"
                        label="Contraseña"
                        placeholder="Ingresa tu contraseña"
                    />
                    <InputField
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        autoComplete="new-password"
                        label="Confirmar tu contraseña"
                        placeholder="Confirma tu contraseña"
                    />
                    <ButtonForm text={"Iniciar sesión"}></ButtonForm>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;