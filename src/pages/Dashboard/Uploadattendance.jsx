
// pagina para la asistencia de los estudiantes
import React, { useState } from 'react';

const Uploadattendance = () => {

  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Estudiante1', presente: false },
    { id: 2, nombre: 'Estudiante2', presente: false },
    { id: 3, nombre: 'Estudiante3', presente: false },
  ]);

  const toggleAttendance = (id) => {
    setEstudiantes(estudiantes.map((estudiante) => (estudiante.id === id ? { ...estudiante, presente: !estudiante.presente } : estudiante)))
  }

  // Función para cargar la asistencia
  const cargarAsistencia = () => {
    const asistencia = estudiantes.filter(estudiante => estudiante.presente);
    console.log('Estudiantes presentes:', asistencia.map(e => e.nombre));
    alert('Asistencia cargada con éxito');
  };

  return (
    <div>
      <h1>Control de asistencia</h1>
      {estudiantes.map(estudiante => (
        <div className='m-2' key={estudiante.id}>
          <input
            type='checkbox'
            id={`estudiante-${estudiante.id}`}
            checked={estudiante.presente}
            onChange={() => toggleAttendance(estudiante.id)}
          ></input>
          <span className='p-4'>{estudiante.nombre}</span>
        </div>
      ))}
      <button className="mt-4 w-full bg-cyan-400 text-cyan-50 p-3" onClick={cargarAsistencia}>Cargar Asistencia</button>
    </div>
  );
};

export default Uploadattendance;