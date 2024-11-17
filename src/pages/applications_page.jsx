import React, { useEffect } from 'react';
import '../stylesheets/Applications_page/ApplicationsPage.css'; // Importa el archivo CSS para estilos

function ApplicationsPage({ applications, setApplications }) {

    const handleDelete = (indexToRemove) => {
        const updatedApplications = applications.filter((_, index) => index !== indexToRemove);
        setApplications(updatedApplications);
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

                    setApplications(updatedApplications);
                    sessionStorage.setItem('applications', JSON.stringify(updatedApplications));
                    alert('¡Una postulación ha sido aceptada!');
                }
            }, 10000); // Temporizador para pruebas

            return () => clearTimeout(timer);
        }
    }, [applications, setApplications]);

    return (
        <div className="applications-container">
            <h2 className="applications-title">Mis Postulaciones</h2>
            <p className="applications-subtitle">
                En caso de querer rechazar una ayudantía ya aceptada, puedes cancelarla con lo cual se notificará al docente para que seleccione otra persona
            </p>
            {applications.length > 0 ? (
                <div className="table-container">
                    <table className="applications-table">
                        <thead>
                            <tr>
                                <th>Emplazamiento</th>
                                <th>Departamento</th>
                                <th>Nombre asignatura</th>
                                <th>Sigla asignatura</th>
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
                                    <td>{application.department}</td>
                                    <td>{application.nombre}</td>
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
                <p className="no-applications-message">No hay postulaciones registradas.</p>
            )}
        </div>
    );
}

export default ApplicationsPage;
