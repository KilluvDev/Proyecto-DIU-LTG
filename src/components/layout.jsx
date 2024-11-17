import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home_page';
import PersonalPage from '../pages/personal_page';
import NavBar from '../components/nav_bar';
import ApplicationsPage from '../pages/applications_page';
import logo from '../assets/Logo_UTFSM.png';
const Layout = () => {
  // Cargar postulaciones desde localStorage al iniciar la aplicación
  const [applications, setApplications] = useState(() => {

    const savedApplications = localStorage.getItem('applications');
    return savedApplications ? JSON.parse(savedApplications) : [];
  });

  // Guardar postulaciones en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications]);

  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title' ><a href="/"><img src={logo} alt='' className='title__image' /></a>
          Plataforma de Ayudantías Unificada</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage setApplications={setApplications} />} />
            <Route path='/personal-info' element={<PersonalPage />} />
            <Route path='/applications' element={<ApplicationsPage applications={applications} setApplications={setApplications} />} />

            {/* Agrega más rutas aquí si tienes otras páginas */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
