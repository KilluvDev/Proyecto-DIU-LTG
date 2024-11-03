import React, { useState } from 'react';
import '../stylesheets/toggle_role/toggle_role.scss'; 

function ToggleRole() {
    const [role, setRole] = useState("Laboratorio");

    const toggleRole = () => {
        setRole((prevRole) => (prevRole === "Laboratorio" ? "Cátedra" : "Laboratorio"));
    };

    return (
        <td>
            <span className="toggle-role" onClick={toggleRole}>{role}</span>
        </td>
    );
}

export default ToggleRole;