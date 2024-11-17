import React from 'react';
import '../stylesheets/Personal_info/personal_page.css'; // Import a CSS file for styling
import certificado from '../assets/Certificado.pdf';
const PersonalPage = () => {
    return (
        <div className="personal-info-container">
            <h1 className="title">Datos Personales</h1>
            <div className="info-section">
                <ul>
                    <li><span className="info-label">Nombre: </span>Carlos Vera</li>
                    <li><span className="info-label">Emplazamiento:</span> Santiago San Joaquín</li>
                    <li><span className="info-label">Carrera:</span> Ingeniería civil en Informática</li>
                </ul>
                <ul>
                    <li><span className="info-label">ROL:</span> 202173564-k</li>
                    <li><span className="info-label">Última matrícula:</span> 2024-2</li>
                    <li><span className="info-label">Nivel:</span> C</li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <h2 className="sub-title">Cursos EAA:</h2>
            <table className="courses-table">
                <thead>
                    <tr>
                        <th>Curso</th>
                        <th>Versión</th>
                        <th>Situación</th>
                        <th>Certificado</th>
                        <th>Horas</th>
                        <th>Vigencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ayudante de Cátedra</td>
                        <td>2024-1</td>
                        <td>Aprobado</td>
                        <td><a href={certificado} download="Certificado">Descargar</a></td>
                        <td>10</td>
                        <td>2025-2</td>
                    </tr>
                    <tr>
                        <td>Ayudante de Laboratorio</td>
                        <td>2023-2</td>
                        <td>Vencido</td>
                        <td><a href="https://dea.usm.cl/escuela-de-asistentes-de-aprendizaje/" target="_blank">Renovar</a></td>
                        <td>10</td>
                        <td>2024-1</td>
                    </tr>
                    <tr>
                        <td>Ayudante corrector</td>
                        <td>2024-1</td>
                        <td>Aprobado</td>
                        <td><a href={certificado} download="Certificado">Descargar</a></td>
                        <td>10</td>
                        <td>2025-2</td>
                    </tr>
                </tbody>
            </table>

            <button className="upload-button" href="/upload">Subir certificado</button>
        </div>
    );
};

export default PersonalPage;
