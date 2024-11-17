import React, { useState, useEffect } from 'react';
import '../stylesheets/Personal_info/personal_page.css'; // Import a CSS file for styling

const PersonalPage = () => {
    const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file
    const [fileURL, setFileURL] = useState(null); // State to store the file URL for displaying

    // On component mount, check if there's a saved file in localStorage
    useEffect(() => {
        const storedFile = localStorage.getItem('uploadedFile');
        if (storedFile) {
            setFileURL(storedFile);
        }
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        if (file) {
            setSelectedFile(file);
            const fileURL = URL.createObjectURL(file); // Create an object URL for the file
            setFileURL(fileURL);

            // Store the file URL in localStorage
            localStorage.setItem('uploadedFile', fileURL);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Simulate the upload (here we just log the file for now)
            console.log("Uploading file: ", selectedFile.name);
            // You can integrate an actual upload logic here (e.g., sending it to a server)
        } else {
            alert("Por favor selecciona un archivo para subir.");
        }
    };

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
                        <td><a href={fileURL} download="Certificado">Descargar</a></td>
                        <td>10</td>
                        <td>2025-2</td>
                    </tr>
                    <tr>
                        <td>Ayudante de Laboratorio</td>
                        <td>2023-2</td>
                        <td>Vencido</td>
                        <td><a href="https://dea.usm.cl/escuela-de-asistentes-de-aprendizaje/" target="_blank" rel="noopener noreferrer">Renovar</a></td>
                        <td>10</td>
                        <td>2024-1</td>
                    </tr>
                    <tr>
                        <td>Ayudante corrector</td>
                        <td>2024-1</td>
                        <td>Aprobado</td>
                        <td><a href={fileURL} download="Certificado">Descargar</a></td>
                        <td>10</td>
                        <td>2025-2</td>
                    </tr>
                </tbody>
            </table>

            {/* File Input for Upload */}
            <div className="file-upload">
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf"  // Limit file selection to PDFs
                    id="file-upload"
                />
                {selectedFile && (
                    <div className="file-info">
                        <span>Archivo seleccionado: {selectedFile.name}</span>
                    </div>
                )}
                <button
                    className="upload-button"
                    onClick={handleUpload}
                >
                    Subir certificado
                </button>
            </div>

            {/* Display the uploaded certificate */}
            {fileURL && (
                <div className="uploaded-file">
                    <h3>Certificado Subido (Pendiente de verificación)</h3>
                </div>
            )}
        </div>
    );
};

export default PersonalPage;
