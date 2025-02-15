

// porcentaje de asistencia de los alumnos desde dashboard
import {
    List,
    ListItem,
    ListItemSuffix,
    Chip,
    Card,
} from "@material-tailwind/react";

const AttendancePercentage = () => {
    const alumnos = [
        { nombre: 'david', porcentaje: 90 },
        { nombre: 'jose', porcentaje: 80 },
        { nombre: 'pedro', porcentaje: 70 },
        { nombre: 'luis', porcentaje: 60 },
        { nombre: 'maria', porcentaje: 50 },
    ]
    return (
        <>
            {
                alumnos.map((alumno) => (
                    <Card className="w-96 m-4">
                        <List>
                            <ListItem>
                                {alumno.nombre}
                                <ListItemSuffix>
                                    <Chip
                                        value={`${alumno.porcentaje}%`}
                                        variant="ghost"
                                        size="sm"
                                        className="rounded-full"
                                    />
                                </ListItemSuffix>
                            </ListItem>
                        </List>
                    </Card>
                ))
            }
        </>
    )
}

export default AttendancePercentage;
