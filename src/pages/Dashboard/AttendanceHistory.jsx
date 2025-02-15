import React, { useState } from 'react';

const AttendanceHistory = () => {
    const historial = [
        { fecha: '01/01/2020', nombre: 'david', asistencia: true },
        { fecha: '01/01/2020', nombre: 'david', asistencia: true },
        { fecha: '01/01/2020', nombre: 'david', asistencia: true },
        { fecha: '01/01/2021', nombre: 'david', asistencia: true },
        { fecha: '01/01/2021', nombre: 'david', asistencia: true },
        { fecha: '01/01/2022', nombre: 'david', asistencia: true },
        { fecha: '01/01/2022', nombre: 'david', asistencia: true },
        { fecha: '01/01/2022', nombre: 'david', asistencia: true },
        { fecha: '01/01/2022', nombre: 'david', asistencia: true },
    ];

    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const filteredHistorial = selectedDate
        ? historial.filter((item) => item.fecha === selectedDate)
        : historial;
    const groupedHistorial = filteredHistorial.reduce((acc, item) => {
        if (!acc[item.fecha]) {
            acc[item.fecha] = [];
        }
        acc[item.fecha].push(item);
        return acc;
    }, {});
    return (
        <div>
            <h2 className="text-2xl font-bold">Historial de Asistencia</h2>
            <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Filtrar por fecha:
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            {Object.keys(groupedHistorial).map((fecha) => (
                <div key={fecha}>
                    <details>
                        <summary>Fecha: {fecha}</summary>
                        {groupedHistorial[fecha].map((item, index) => (
                            <div key={index}>
                                <p>Nombre: {item.nombre}</p>
                                <p>Asistencia: {item.asistencia ? 'Presente' : 'Ausente'}</p>
                            </div>
                        ))}
                    </details>
                </div>
            ))}
        </div>
    );
};

export default AttendanceHistory;