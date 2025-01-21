
const RegisterForm = () => {
    return (
        <form>
            <label>
                Nombre de usuario:
                <input
                    type="text"
                    name="username"
                    placeholder="nombre de usuario"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
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
            <label>
                Profesor:
                <input
                    type="checkbox"
                    name="role"
                    value="profesor"
                    checked={formData.role === 'profesor'}
                    onChange={handleChange}
                />
            </label>
            <label>
                Alumno:
                <input
                    type="checkbox"
                    name="role"
                    value="alumno"
                    checked={formData.role === 'alumno'}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Registro</button>
        </form>
    );
};

export default RegisterForm;