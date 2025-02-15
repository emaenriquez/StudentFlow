// pagina para la gestion de estudiante en el dashboard
import InputFile from '../../components/inputFile/InputFile'
import ButtonFile from '../../components/buttonForm/ButtonForm'
import { useState } from 'react';
const StudentManagement = () => {

    const [name, setName] = useState('');
    const [listaEstudiante, setListaEstudiante] = useState([]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddStudent = () => {
        if (name.trim() !== '') {
            setListaEstudiante([...listaEstudiante, name]);
            setName('');
        }
    };

    const hadleDeleteStudent = (index) => {
        setListaEstudiante(listaEstudiante.filter((_, i) => i !== index));
    };

    return (
        <>
            <h2>Gestion de estudiantes</h2>
            <div className=' space-y-2'>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    handleAddStudent();
                }}
                className='flex place-items-end justify-start space-x-2'
                >
                    <InputFile
                        name={"name"} type={"text"}
                        value={name}
                        onChange={handleNameChange}
                        required
                        placeholder={"Nombre del estudiante"}
                    />
                    <ButtonFile text={"Agregar estudiante"} />
                </form>
            </div>

            <ul className='mt-4 space-y-2'>
                {
                    listaEstudiante.map((estudiante, index) => (
                        <div key={index} className='flex items-center justify-between p-2 bg-gray-50 rounded'>
                            <span>{estudiante}</span>
                            <ButtonFile
                                text={"Eliminar"}
                                onClick={() => hadleDeleteStudent(index)}
                                className="bg-red-500 hover:bg-red-600"
                            />
                        </div>
                    ))
                }
            </ul>

        </>
    )
}

export default StudentManagement;