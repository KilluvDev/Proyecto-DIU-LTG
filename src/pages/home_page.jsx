import React, { useEffect, useState } from 'react';
import ToggleRole from '../components/toggle_rol';

const HomePage = ({ setApplications }) => {
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    // Lista Inicial.
    const initialCourses = [
      {
        id: 1,
        emplazamiento: 'San Joaquín',
        asignatura: 'INF-123',
        tipoAyudante: 'Laboratorio',
        inicio: 'Marzo',
        termino: 'Julio',
        horas: 15,
        estado: 'Pendiente', // Actualizado para poder gestionar su cambio a posteriori
      },
      {
        id: 2,
        emplazamiento: 'Casa Central',
        asignatura: 'INF-102',
        tipoAyudante: 'Laboratorio',
        inicio: 'Abril',
        termino: 'Julio',
        horas: 15,
        estado: 'Pendiente',
      },
      {
        id: 3,
        emplazamiento: 'San Joaquín',
        code: 'INV-001',
        tipoAyudante: 'Investigador',
        inicio: 'Marzo',
        termino: 'Julio',
        horas: 40,
        estado: 'Pendiente',
      },
      {
        id: 4,
        emplazamiento: 'Casa Central',
        tipoAyudante: 'Ayudante de informática',
        code: 'ADM-002',
        inicio: 'Abril',
        termino: 'Julio',
        horas: 40,
        estado: 'Pendiente',
      },
    ];

    //Carga las postulaciones (aplicaciones) en un estado.
    const savedApplications = JSON.parse(sessionStorage.getItem('applications')) || [];
    setApplications(savedApplications);

    //Filtra con las aplicaciones (postulaciones) sacadas anteriormente del sessionStorage
    const filteredCourses = initialCourses.filter(
      (course) =>
        !savedApplications.some(
          (app) =>
            app.asignatura === course.asignatura && app.code === course.code
        )
    );
    setAvailableCourses(filteredCourses);
  }, [setApplications]);

  //Función para postular a las personas.
  const handleApply = (selectedCourse) => {
    setApplications((prev) => {
      const newApplications = [...prev, selectedCourse];
      sessionStorage.setItem('applications', JSON.stringify(newApplications));
      alert('Postulación realizada con éxito');
      return newApplications;
    });

    setAvailableCourses((prevCourses) =>
      prevCourses.filter(
        (course) =>
          course.asignatura !== selectedCourse.asignatura ||
          course.code !== selectedCourse.code
      )
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
        {availableCourses.filter((course) => course.asignatura).length > 0 ? (
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
      ) : (
        <p>No hay cursos disponibles para postular en asignaturas.</p>
      )}
      </div>

      <p>Recuerda que son cursos que debes haber pasado. Si deseas hacer ayudantías administrativas o de investigación, aquí abajo se presentan:</p>

      {/* Tabla de ayudantias no asignadas a un curso específico.*/}
      <div className="table-container">
        {availableCourses.filter((course) => course.code).length > 0 ? (
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
                .filter((course) => course.code) // Only show courses with 'code'
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
        ) : (
          <p>No hay cursos disponibles para postular en ayudantías administrativas o de investigación.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;