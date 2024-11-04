import React from 'react';
import '../stylesheets/toggle_role/toggle_role.scss';

const ToggleRole = ({ role, onChangeRole }) => {
  const toggleRole = () => {
    onChangeRole(role === 'Laboratorio' ? 'Cátedra' : 'Laboratorio');
  };

  return (
    <td className='toggle-role'>
      <button  onClick={toggleRole}>
        {role}
      </button>
    </td>
  );
};

export default ToggleRole;