import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from '../pages/HomePage';
import AddVacationPage from "../pages/AddVacationPage"
import ResortListingPage from "../pages/ResortListingPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ResortDescriptionPage from "../pages/ResortDescriptionPage"

import '../assets/css/App.css';
import '../assets/css/utilities.css';

const App = () => 
{
  
  return (

    <>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<HomePage  />} />
          <Route path="addVacation" element={<AddVacationPage />} />
          <Route path="Vacations" element={<ResortListingPage  />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="Vacations/:id" element={<ResortDescriptionPage />} />

        </Routes>

      </BrowserRouter>
    </>

    );
};

export default App;

