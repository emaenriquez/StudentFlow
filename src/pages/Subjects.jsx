

import {useNavigate} from 'react-router-dom';

const Subjects = () => {
    const navigate = useNavigate();
    const materias = [
        {
            id: 1,
            name: 'Matemáticas',
        },
        {
            id: 2,
            name: 'Física',
        },
        {
            id: 3,
            name: 'Química',
        },]
    
    const hadleMateriaClick = (materialId) => {
        navigate(`/dashboard/${materialId}`)
    }

    return (
        <div>
            <h1>Materials Page</h1>
            {
                materias.map((materia) => (
                    <div key={materia.id} onClick={() => hadleMateriaClick(materia.name)}>
                        <p>{materia.name}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Subjects;