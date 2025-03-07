
import { useNavigate } from 'react-router-dom';
import InputField from '../inputFile/InputFile';
import ButtonForm from '../buttonForm/ButtonForm'
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    
    const {register,handleSubmit} = useForm();

    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/materials');
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Datos hardcodeados para autenticación
    //     const hardcodedEmail = 'user@example.com';
    //     const hardcodedPassword = 'password123';

    //     if (formData.email === hardcodedEmail && formData.password === hardcodedPassword) {
    //         // Redirigir a materials en caso de éxito
    //         navigate('/materials');
    //     } else {
    //         alert('Correo electrónico o contraseña incorrectos');
    //     }
    // };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Iniciar sesión
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <InputField
                        id="email"
                        name="email"
                        type="email"
                        // value={formData.email}
                        // onChange={handleChange}
                        required
                        autoComplete="email"
                        label="Email"
                        placeholder="Ingresa tu email"
                    />
                    <InputField
                        id="password"
                        name="password"
                        type="password"
                        // value={formData.password}
                        // onChange={handleChange}
                        required
                        autoComplete="current-password"
                        label="Contraseña"
                        placeholder="Ingresa tu contraseña"
                    />
                    <ButtonForm text={"Iniciar sesión"}></ButtonForm>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;