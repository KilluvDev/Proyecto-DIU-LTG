import React, { useEffect, useState } from 'react';
import Filters from '../components/filters';
import '../stylesheets/Home_page/HomePage.css'; // Importar el archivo CSS

const HomePage = ({ setApplications }) => {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    department: '',
    location: '',
    tipoAyudante: '',
  });

  const handleSelectChange = (course) => {
    setSelectedCourse(course);
  };

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  useEffect(() => {
    // Lista Inicial
    const initialCourses = [
      { id: 1, department: 'Informática', emplazamiento: 'San Joaquín', asignatura: 'INF-134', tipoAyudante: 'Laboratorio', inicio: 'Marzo', termino: 'Julio', horas: 15, cupos: 10, estado: 'Pendiente', nombre: 'Estructura de datos' },
      { id: 2, department: 'Informática', emplazamiento: 'Casa Central', asignatura: 'INF-253', tipoAyudante: 'Laboratorio', inicio: 'Abril', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Lenguajes de programación' },
      { id: 3, department: 'Informática', emplazamiento: 'San Joaquín', asignatura: 'INF-253', tipoAyudante: 'Catedra', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Lenguajes de programación' },
      { id: 4, department: 'Informática', emplazamiento: 'Casa Central', asignatura: 'INF-253', tipoAyudante: 'Catedra', inicio: 'Abril', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Lenguajes de programación' },
      { id: 5, department: 'Informática', emplazamiento: 'San Joaquín', asignatura: 'INF-155', tipoAyudante: 'Catedra', inicio: 'Marzo', termino: 'Julio', horas: 40, estado: 'Pendiente', nombre: 'Informática teórica' },
      { id: 6, department: 'Informática', emplazamiento: 'Casa Central', asignatura: 'INF-155', tipoAyudante: 'Catedra', inicio: 'Abril', termino: 'Julio', horas: 40, estado: 'Pendiente', nombre: 'Informática teórica' },
      { id: 7, department: 'Informática', emplazamiento: 'Casa Central', asignatura: 'N/A', tipoAyudante: 'Ayudante de informática', inicio: 'Abril', termino: 'Julio', horas: 40, estado: 'Pendiente', nombre: 'N/A' },
      { id: 8, department: 'Informática', emplazamiento: 'San Joaquín', asignatura: 'INF-221', tipoAyudante: 'Laboratorio', inicio: 'Marzo', termino: 'Julio', horas: 15, cupos: 10, estado: 'Pendiente', nombre: 'Algoritmos y complejidad' },
      { id: 9, department: 'Informática', emplazamiento: 'Casa Central', asignatura: 'INF-221', tipoAyudante: 'Laboratorio', inicio: 'Abril', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Algoritmos y complejidad' },
      { id: 10, department: 'Informática', emplazamiento: 'San Joaquín', asignatura: 'INF-221', tipoAyudante: 'Catedra', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Algoritmos y complejidad' },
      { id: 11, department: 'Informática', emplazamiento: 'Casa Central', asignatura: 'INF-221', tipoAyudante: 'Catedra', inicio: 'Abril', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Algoritmos y complejidad' },
      { id: 12, department: 'Física', emplazamiento: 'San Joaquín', asignatura: 'FIS-110', tipoAyudante: 'Catedra', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Física 1' },
      { id: 13, department: 'Informática', emplazamiento: 'Casa Central', asignatura: 'N/A', tipoAyudante: 'Ayudante de informática', inicio: 'Abril', termino: 'Julio', horas: 40, estado: 'Pendiente', nombre: 'N/A' },
      { id: 14, department: 'Informática', emplazamiento: 'Casa Central', asignatura: 'N/A', tipoAyudante: 'Ayudante de informática', inicio: 'Abril', termino: 'Julio', horas: 40, estado: 'Pendiente', nombre: 'N/A' },
      { id: 15, department: 'Informática', emplazamiento: 'San Joaquín', asignatura: 'INF-270', tipoAyudante: 'Laboratorio', inicio: 'Marzo', termino: 'Julio', horas: 15, cupos: 10, estado: 'Pendiente', nombre: 'Organización y sistemas de información' },
      { id: 16, department: 'Informática', emplazamiento: 'Casa Central', asignatura: 'INF-270', tipoAyudante: 'Laboratorio', inicio: 'Abril', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Organización y sistemas de información' },
      { id: 17, department: 'Informática', emplazamiento: 'San Joaquín', asignatura: 'INF-270', tipoAyudante: 'Catedra', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Organización y sistemas de información' },
      { id: 18, department: 'Informática', emplazamiento: 'Casa Central', asignatura: 'INF-270', tipoAyudante: 'Catedra', inicio: 'Abril', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Organización y sistemas de información' },
      { id: 19, department: 'Informática', emplazamiento: 'San Joaquín', asignatura: 'N/A', tipoAyudante: 'Investigador', inicio: 'Marzo', termino: 'Julio', horas: 40, estado: 'Pendiente', nombre: 'N/A' },
      { id: 20, department: 'Informática', emplazamiento: 'San Joaquín', asignatura: 'N/A', tipoAyudante: 'Ayudante de informática', inicio: 'Abril', termino: 'Julio', horas: 40, estado: 'Pendiente', nombre: 'N/A' },
      { id: 21, department: 'Informática', emplazamiento: 'San Joaquín', asignatura: 'N/A', tipoAyudante: 'Ayudante de informática', inicio: 'Abril', termino: 'Julio', horas: 40, estado: 'Pendiente', nombre: 'N/A' },
      { id: 22, department: 'Física', emplazamiento: 'San Joaquín', asignatura: 'FIS-110', tipoAyudante: 'Laboratorio', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Física 1' },
      { id: 23, department: 'Física', emplazamiento: 'Casa Central', asignatura: 'FIS-110', tipoAyudante: 'Laboratorio', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Física 1' },
      { id: 24, department: 'Física', emplazamiento: 'Casa Central', asignatura: 'FIS-110', tipoAyudante: 'Catedra', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Física 1' },
      { id: 25, department: 'Física', emplazamiento: 'San Joaquín', asignatura: 'FIS-120', tipoAyudante: 'Laboratorio', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Física 2' },
      { id: 26, department: 'Física', emplazamiento: 'Casa Central', asignatura: 'FIS-120', tipoAyudante: 'Laboratorio', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Física 2' },
      { id: 27, department: 'Física', emplazamiento: 'Casa Central', asignatura: 'FIS-120', tipoAyudante: 'Catedra', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Física 2' },
      { id: 28, department: 'Física', emplazamiento: 'San Joaquín', asignatura: 'FIS-120', tipoAyudante: 'Catedra', inicio: 'Marzo', termino: 'Julio', horas: 15, estado: 'Pendiente', nombre: 'Física 2' },
    ];

    const savedApplications = JSON.parse(sessionStorage.getItem('applications')) || [];
    setApplications(savedApplications);

    const filteredCourses = initialCourses.filter(
      (course) =>
        !savedApplications.some(
          (app) => app.asignatura === course.asignatura && app.code === course.code
        )
    );
    setAvailableCourses(filteredCourses);
  }, [setApplications]);

  const filteredCourses = availableCourses.filter((course) => {
    const matchLocation = selectedFilters.location ? course.emplazamiento === selectedFilters.location : true;
    const matchCourse = selectedFilters.department ? course.department === selectedFilters.department : true;
    const matchTipoAyudante = selectedFilters.tipoAyudante ? course.tipoAyudante === selectedFilters.tipoAyudante : true;
    return matchLocation && matchCourse && matchTipoAyudante;
  });

  const handleApply = (selectedCourse) => {
    setApplications((prev) => {
      const newApplications = [...prev, selectedCourse];
      sessionStorage.setItem('applications', JSON.stringify(newApplications));
      alert('Postulación realizada con éxito');
      return newApplications;
    });

    setAvailableCourses((prevCourses) =>
      prevCourses.filter(
        (course) => course.asignatura !== selectedCourse.asignatura || course.code !== selectedCourse.code
      )
    );
  };

  return (
    <div className="home-container">
      <h2 className="home-title">¡Aquí encuentras los cursos los cuales tienes disponibilidad para hacer ayudantía!</h2>
      <p className="home-subtitle">Una vez que elijas postular, si deseas revisar su estado o cancelarla deberá ir a Postulaciones.</p>

      <div className="filters-container">
        <Filters selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
      </div>

      <div className="table-container">
        <table className="courses-table">
          <thead>
            <tr>
              <th>Emplazamiento</th>
              <th>Departamento</th>
              <th>Nombre asignatura</th>
              <th>Sigla asignatura</th>
              <th>Tipo de ayudante</th>
              <th>Inicio</th>
              <th>Término</th>
              <th>Horas</th>
              <th>Postulación</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.emplazamiento}</td>
                <td>{course.department}</td>
                <td>{course.nombre}</td>
                <td>{course.asignatura}</td>
                <td>{course.tipoAyudante}</td>
                <td>{course.inicio}</td>
                <td>{course.termino}</td>
                <td>{course.horas}</td>
                <td>
                  <button
                    className="apply-button"
                    onClick={() => handleApply(course)}
                  >
                    ➔
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
