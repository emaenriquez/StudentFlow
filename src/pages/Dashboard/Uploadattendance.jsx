
// pagina para la asistencia de los estudiantes
import React, { useState } from 'react';

const Uploadattendance = () => {

  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Estudiante1', presente: false },
    { id: 2, nombre: 'Estudiante2', presente: false },
    { id: 3, nombre: 'Estudiante3', presente: false },
  ]);

  // Función para cambiar el estado de presencia
  const toggleAsistencia = (id) => {
    setEstudiantes(estudiantes.map(estudiante => 
      estudiante.id === id ? { ...estudiante, presente: !estudiante.presente } : estudiante
    ));
  };

  // Función para cargar la asistencia
  const cargarAsistencia = () => {
    const asistencia = estudiantes.filter(estudiante => estudiante.presente);
    console.log('Estudiantes presentes:', asistencia.map(e => e.nombre));
    alert('Asistencia cargada con éxito');
  };

  return (
    <div>
      <h1>Cargar Asistencia</h1>
      {estudiantes.map(estudiante => (
        <div key={estudiante.id}>
          <span>{estudiante.nombre}</span>
          <button onClick={() => toggleAsistencia(estudiante.id)}>
            {estudiante.presente ? 'Presente' : 'Ausente'}
          </button>
        </div>
      ))}
      <button onClick={cargarAsistencia}>Cargar Asistencia</button>
    </div>
  );
};

export default Uploadattendance;