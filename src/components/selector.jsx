import React, { useState } from 'react';

function CourseSelector({ selectedCourse, onSelectChange }) {
  return (
    <div>
      <label htmlFor="course-select">Choose a course:</label>
      <select id="course-select" value={selectedCourse} onChange={(e) => onSelectChange(e.target.value)}>
        <option value="">--Select a Course--</option>
        <option value="math">Mathematics</option>
        <option value="science">Science</option>
        <option value="history">History</option>
        <option value="computer">Computer Science</option>
      </select>
    </div>
  );
}

export default CourseSelector;