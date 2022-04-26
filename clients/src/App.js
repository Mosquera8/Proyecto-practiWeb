import { Container, TableContainer } from '@mui/material';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EstudianteForm from './components/EstudianteForm';
import TablaEstudiantes from "./components/EstudiantesTable";

import Menu from "./components/Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Container>
        <Routes>
          <Route path='/' element={<TablaEstudiantes/>} />
          <Route path='/tablaEstudiantes/new' element={<EstudianteForm/>} />

        </Routes>
      </Container>
    
    </BrowserRouter>
  )
}
