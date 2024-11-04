import React from 'react';
import imagen from '../assets/Jesucristo_superestrella.png'
const PersonalPage = () => {
    return (
        <div>
            <h1>Jesucristo Superestrella</h1>
            <img src={imagen} height={500} alt="Description of image" />
            <h1>Rol: 333333333-3</h1>
            <h1>edad: 36</h1>
            <h1>Cumpleaños: 25 de diciembre</h1>
            <h1>Estudiante de Ingenieria Teologica Informática </h1>
            <h1>Dirección: Jerusalén </h1>
        </div>
    );
};

export default PersonalPage;