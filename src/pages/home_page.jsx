import React from 'react';
import ToggleRole from '../components/toggle_rol';
const HomePage = ({ setApplications }) => {

  const handleApply = (course) => {
    setApplications((prev) => [...prev, course]);
    alert('Postulación realizada con éxito');
  };

  // Array de objetos con los datos de los cursos
  const courses = [
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

  return (
    <div className="home-page">
      <h2>¡Aquí se encuentran los cursos a los cuales estás disponible para hacer ayudantía!</h2>
      <p>Una vez que elijas postular, si deseas revisar su estado o cancelarla deberá ir a Estado Postulaciones.</p>

      {/* Tabla de cursos */}
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
            {courses.slice(0, 2).map((course, index) => (
              <tr key={index}>
                <td>{course.emplazamiento}</td>
                <td>{course.asignatura}</td>
                <ToggleRole />
                <td>{course.inicio}</td>
                <td>{course.termino}</td>
                <td>{course.horas}</td>
                <td>
                  <button className="apply-button" onClick={() => handleApply(course)}>➔</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>Recuerda que son cursos que debes haber pasado. Si deseas hacer ayudantías administrativas o de investigación, aquí abajo se presentan:</p>

      {/* Tabla de ayudantías administrativas o de investigación */}
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
            {courses.slice(2).map((course, index) => (
              <tr key={index}>
                <td>{course.emplazamiento}</td>
                <td>{course.tipoAyudante}</td>
                <td>{course.inicio}</td>
                <td>{course.termino}</td>
                <td>{course.horas}</td>
                <td>
                  <button className="apply-button" onClick={() => handleApply(course)}>➔</button>
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
