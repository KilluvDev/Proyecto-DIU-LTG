import React from 'react';

function Filters({ selectedFilters, onFilterChange }) {
  return (
    <div className="filters">
      <label>Seleccione Departamento:</label>
      <select
        value={selectedFilters.department}
        onChange={(e) => onFilterChange('department', e.target.value)}
      >
        <option value="">-</option>
        <option value="Informática">Informática</option>
        <option value="Física">Física</option>
      </select>

      <label>Seleccione Emplazamiento:</label>
      <select
        value={selectedFilters.location}
        onChange={(e) => onFilterChange('location', e.target.value)}
      >
        <option value="">-</option>
        <option value="San Joaquín">San Joaquín</option>
        <option value="Casa Central">Casa Central</option>
      </select>

      <label>Seleccione Tipo de Ayudante que desea ser:</label>
      <select
        value={selectedFilters.tipoAyudante}
        onChange={(e) => onFilterChange('tipoAyudante', e.target.value)}
      >
        <option value="">-</option>
        <option value="Catedra">Catedra</option>
        <option value="Laboratorio">Laboratorio</option>
        <option value="Investigador">Investigador</option>
        <option value="Ayudante de informática">Ayudante de informática</option>
      </select>
    </div>
  );
}

export default Filters;