import React, { useEffect } from 'react';

function ApplicationsPage({ applications, setApplications }) {

    const handleDelete = (indexToRemove) => {
        const updatedApplications = applications.filter((_, index) => index !== indexToRemove);

        // Actualizar estado de applications
        setApplications(updatedApplications);

        // Actualizar estado de applications
        sessionStorage.setItem('applications', JSON.stringify(updatedApplications));
    };

    useEffect(() => {
        if (applications.length > 0) {
            const timer = setTimeout(() => {
                const pendingApplications = applications
                    .map((application, index) => ({ ...application, index }))
                    .filter(application => application.estado === 'Pendiente');

                if (pendingApplications.length > 0) {
                    const randomIndex = Math.floor(Math.random() * pendingApplications.length);
                    const selectedApplication = pendingApplications[randomIndex];
                    const updatedApplications = applications.map((application, index) =>
                        index === selectedApplication.index
                            ? { ...application, estado: 'Aceptado' }
                            : application
                    );

                    // Actualizar estado de applications y sesión guardada
                    setApplications(updatedApplications);
                    sessionStorage.setItem('applications', JSON.stringify(updatedApplications));

                    // Alerta
                    alert('¡Una postulación ha sido aceptada!');
                }
            }, 10000); // Tiempo predeterminado para que no sea tedioso hacer la prueba cuando lo descarguen los ayudantes/profesora

            // Timer
            return () => clearTimeout(timer);
        }
    }, [applications, setApplications]);

    return (
        <div>
            <h1>Mis Postulaciones</h1>
            {applications.length > 0 ? (
                <div className="table-container">
                    <table className="applications-table">
                        <thead>
                            <tr>
                                <th>Emplazamiento</th>
                                <th>Asignatura</th>
                                <th>Tipo de Ayudantía</th>
                                <th>Inicio</th>
                                <th>Término</th>
                                <th>Horas</th>
                                <th>Estado</th>
                                <th>Cancelar postulación</th>
                            </tr>
                        </thead>

                        <tbody>
                            {applications.map((application, index) => (
                                <tr key={index}>
                                    <td>{application.emplazamiento}</td>
                                    <td>{application.asignatura || 'N/A'}</td>
                                    <td>{application.tipoAyudante}</td>
                                    <td>{application.inicio}</td>
                                    <td>{application.termino}</td>
                                    <td>{application.horas}</td>
                                    <td>{application.estado}</td>
                                    <td>
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDelete(index)}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No hay postulaciones registradas.</p>
            )}
        </div>
    );
}

export default ApplicationsPage;
