import React from 'react';

function Filters({ selectedFilters, onFilterChange }) {
  return (
    <div className="filters">
      <div class="filter-item">
        <label>Seleccione Departamento:</label>
        <select
          value={selectedFilters.department}
          onChange={(e) => onFilterChange('department', e.target.value)}
        >
          <option value="">-</option>
          <option value="Informática">Informática</option>
          <option value="Física">Física</option>
        </select>
      </div>
      <div class="filter-item">
      <label>Seleccione Emplazamiento:</label>
        <select
          value={selectedFilters.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
        >
          <option value="">-</option>
          <option value="San Joaquín">San Joaquín</option>
          <option value="Casa Central">Casa Central</option>
        </select>
      </div>
      <div class="filter-item">
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
    </div>
  );
}

export default Filters;