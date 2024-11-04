import React, { useEffect, useState } from 'react';
import ToggleRole from '../components/toggle_rol';

const HomePage = ({ setApplications }) => {
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    // Lista Inicial.
    const initialCourses = [
      {
        emplazamiento: 'San Joaquín',
        asignatura: 'INF-123',
        tipoAyudante: 'Laboratorio',
        inicio: 'Marzo',
        termino: 'Julio',
        horas: 40,
      },
      {
        emplazamiento: 'Casa Central',
        asignatura: 'INF-102',
        tipoAyudante: 'Laboratorio',
        inicio: 'Abril',
        termino: 'Julio',
        horas: 40,
      },
      {
        emplazamiento: 'San Joaquín',
        tipoAyudante: 'Investigador',
        inicio: 'Marzo',
        termino: 'Julio',
        horas: 40,
      },
      {
        emplazamiento: 'Casa Central',
        tipoAyudante: 'Ayudante de informática',
        inicio: 'Abril',
        termino: 'Julio',
        horas: 40,
      },
    ];

    //Carga las postulaciones (aplicaciones) en un estado.
    const savedApplications = JSON.parse(sessionStorage.getItem('applications')) || [];
    setApplications(savedApplications); 

    //Filtra con las aplicaciones (postulaciones) sacadas anteriormente del sessionStorage
    const filteredCourses = initialCourses.filter(course =>
      !savedApplications.some(app => app.asignatura === course.asignatura)
    );

    setAvailableCourses(filteredCourses);
  }, [setApplications]);

  //Función para postular a las personas.
  const handleApply = (availableCourse) => {
    setApplications((prev) => {
      const newApplications = [...prev, availableCourse];
      // Guarda la nueva lista de aplicaciones en el sessionStorage aplicaciones (postulaciones)
      sessionStorage.setItem('applications', JSON.stringify(newApplications));
      alert('Postulación realizada con éxito');
      return newApplications;
    });

    // Quita el curso aplicado de los disponibles
    setAvailableCourses((prevCourses) =>
      prevCourses.filter((c) => c.asignatura !== availableCourse.asignatura)
    );
  };

  const handleRoleChange = (asignatura, newRole) => {
    setAvailableCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.asignatura === asignatura
          ? { ...course, tipoAyudante: newRole }
          : course
      )
    );
  };

  return (
    <div className="home-page">
      <h2>¡Aquí se encuentran los cursos a los cuales estás disponible para hacer ayudantía!</h2>
      <p>Una vez que elijas postular, si deseas revisar su estado o cancelarla deberá ir a Estado Postulaciones.</p>

      {/* Tabla de Asignaturas*/}
      <div className="table-container">
        <table className="courses-table">
          <thead>
            <tr>
              <th>Emplazamiento</th>
              <th>Asignatura</th>
              <th>Tipo de ayudante</th>
              <th>Inicio</th>
              <th>Término</th>
              <th>Horas</th>
              <th>Postulación</th>
            </tr>
          </thead>
          <tbody>
            {availableCourses
              .filter((course) => course.asignatura) // Only show courses with 'asignatura'
              .map((course, index) => (
                <tr key={index}>
                  <td>{course.emplazamiento}</td>
                  <td>{course.asignatura}</td>
                  <ToggleRole 
                    role={course.tipoAyudante} 
                    onChangeRole={(newRole) => handleRoleChange(course.asignatura, newRole)} 
                  />
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

      <p>Recuerda que son cursos que debes haber pasado. Si deseas hacer ayudantías administrativas o de investigación, aquí abajo se presentan:</p>

      {/* Tabla de ayudantias no asignadas a un curso específico.*/}
      <div className="table-container">
        <table className="research-table">
          <thead>
            <tr>
              <th>Emplazamiento</th>
              <th>Tipo de ayudantía</th>
              <th>Inicio</th>
              <th>Término</th>
              <th>Horas</th>
              <th>Postulación</th>
            </tr>
          </thead>
          <tbody>
            {availableCourses
              .filter((course) => !course.asignatura) 
              .map((course, index) => (
                <tr key={index}>
                  <td>{course.emplazamiento}</td>
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