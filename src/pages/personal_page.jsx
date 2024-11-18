import React, { useState, useEffect } from 'react';
import '../stylesheets/Personal_info/personal_page.css';

const PersonalPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileURL, setFileURL] = useState(null);
    const [isFileUploaded, setIsFileUploaded] = useState(false);


    useEffect(() => {
        const storedFileURL = localStorage.getItem('uploadedFileURL');
        const storedFileName = localStorage.getItem('uploadedFileName');
        if (storedFileURL && storedFileName) {
            setFileURL(storedFileURL);
            setSelectedFile({ name: storedFileName });
            setIsFileUploaded(true);
        }
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setFileURL(fileURL);
            setSelectedFile(file);
            setIsFileUploaded(true);

            localStorage.setItem('uploadedFileURL', fileURL);
            localStorage.setItem('uploadedFileName', file.name);
        } else {
            setIsFileUploaded(false);  // Solamente3 en el caso de que no se haya subido nada.
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
                        <th>Vigencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ayudante de Cátedra</td>
                        <td>2024-1</td>
                        <td>Aprobado</td>
                        <td><a href={fileURL} download="Certificado">Descargar</a></td>
                        <td>2025-2</td>
                    </tr>
                    <tr>
                        <td>Ayudante de Laboratorio</td>
                        <td>2023-2</td>
                        <td>Vencido</td>
                        <td><a href="https://dea.usm.cl/escuela-de-asistentes-de-aprendizaje/" target="_blank" rel="noopener noreferrer">Renovar</a></td>
                        <td>2024-1</td>
                    </tr>
                    <tr>
                        <td>Ayudante corrector</td>
                        <td>2024-1</td>
                        <td>Aprobado</td>
                        <td><a href={fileURL} download="Certificado">Descargar</a></td>
                        <td>2025-2</td>
                    </tr>
                </tbody>
            </table>

            <div >
                Considere que solo se puede subir un archivo.
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf" // Limit file selection to PDFs
                    id="file-upload"
                    style={{
                        display: 'none', // Hide the file input
                    }}
                />

                <button
                    className="upload-button"
                    onClick={() => document.getElementById('file-upload').click()} // Trigger file input on button click
                >
                    Subir certificado
                </button>
            </div>
            {!fileURL && selectedFile && isFileUploaded && (
                <div className="file-info">
                    <span>Archivo seleccionado: {selectedFile.name}</span>
                </div>
            )}


            {fileURL && isFileUploaded && (
                <div className="uploaded-file">
                    <h3>Certificado Subido: {selectedFile.name} (Pendiente de verificación)</h3>
                </div>
            )}

        </div>
    );
};

export default PersonalPage;
