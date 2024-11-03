import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home_page';
import PersonalPage from '../pages/personal_page';
import NavBar from '../components/nav_bar';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title' >Plataforma de Ayudantías Unificada</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/personal-info' element={<PersonalPage />} />
            {/* Agrega más rutas aquí si tienes otras páginas */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
