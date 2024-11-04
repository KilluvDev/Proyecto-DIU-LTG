import React from 'react';

function ApplicationsPage({ applications, setApplications }) {

    const handleDelete = (indexToRemove) => {
        const updatedApplications = applications.filter((_, index) => index !== indexToRemove);
        
        // Update the applications state
        setApplications(updatedApplications);

        // Update the session storage
        sessionStorage.setItem('applications', JSON.stringify(updatedApplications));
    };

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
                                <th>Borrar postulación</th>
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
                                    <td>Pendiente</td>
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