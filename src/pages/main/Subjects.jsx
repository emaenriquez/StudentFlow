import { useNavigate } from 'react-router-dom';

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
        },
    ];

    const hadleMateriaClick = (materialId) => {
        navigate(`/dashboard/${materialId}`);
    };

    return (
        <div className='flex flex-wrap gap-1'>
            {materias.map((materia) => (
                <div key={materia.id} className="relative p-7 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {materia.name}
                        </h5>
                    </div>
                    <div className="p-6 pt-0">
                        <button onClick={() => hadleMateriaClick(materia.name)} data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Ver mi curso
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Subjects;