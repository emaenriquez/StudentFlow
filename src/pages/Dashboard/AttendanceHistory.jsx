
// pagina para ver el historial de asistencia de los alumnos en el dashboard
const AttendanceHistory = () => {
    const historial = [
        {fecha:'01/01/2020',nombre:'david',asistencia:true},
        {fecha:'01/01/2020',nombre:'david',asistencia:true},
        {fecha:'01/01/2020',nombre:'david',asistencia:true},
    ]
    return (
        <div>
            <h2 className="text-2xl font-bold">Historial de Asistencia</h2>
            {
                historial.map((item) => (
                    <div key={item.fecha}>
                        <p>Fecha: {item.fecha}</p>
                        <p>Nombre: {item.nombre}</p>
                        <p>Asistencia: {item.asistencia ? 'Presente' : 'Ausente'}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default AttendanceHistory;