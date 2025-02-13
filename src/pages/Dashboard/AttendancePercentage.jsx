

// porcentaje de asistencia de los alumnos desde dashboard

const AttendancePercentage = () => {
    const alumnos = [
        {nombre:'david',porcentaje:90},
        {nombre:'jose',porcentaje:80},
        {nombre:'pedro',porcentaje:70},
        {nombre:'luis',porcentaje:60},
        {nombre:'maria',porcentaje:50},
    ]
    return (
        <>
            <h1>Porcentaje de asistencia</h1>
            {
                alumnos.map((alumno) => (
                    <div key={alumno.nombre}>
                        <p>{alumno.nombre}: {alumno.porcentaje}%</p>
                    </div>
                ))
            }
        </>
    )
}

export default AttendancePercentage;