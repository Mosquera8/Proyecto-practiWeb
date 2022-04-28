import React from 'react'
import { AppBar, BottomNavigation, Container, Box, Button, Toolbar, Typography, Grid, Card, CardContent } from '@mui/material'

import MUIDataTable from "mui-datatables";



export default function EstudiantesTable() {
    const columns = [
        {
            name: "codigo",
            label: "Codigo",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "nombre",
            label: "Nombre",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "correo",
            label: "Correo",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "telefono",
            label: "Tel. Contacto",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "plan estudio",
            label: "Plan Estudio",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "prerrequisitos",
            label: "Prerrequisitos",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "aprobado",
            label: "Aprobado",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "fecha",
            label: "Fecha Aprobación",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "responsable",
            label: "Responsable",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    const columns2 = [
        {
            name: "requerimientos",
            label: "Requerimientos",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "aprobado",
            label: "Aprobado de estudiante",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    const data = [
        [3003429, "Juan Mosquera", "jfm.mosquera@gmail.com", 315888999, "2018-1", "BOTTON", "Aprobado", new Date(2023, 4, 12).toDateString(), "Julia"],
        [1287734, "Cristian Garces", "garces99@gmail.com", 315444959, "2018-1", "BOTTON", "Aprobado", new Date(2023, 10, 10).toDateString(), "Julia"],
        [1344768, "Juan Cote", "cote@gmail.com", 314888955, "2018-1", "BOTTON", "Denegado", new Date(2023, 5, 12).toDateString(), "Julio"],
        [1276355, "Andres Casas", "casas@outlook.com", 3156899812, "2020-2", "BOTTON", "Denegado", new Date(2023, 4, 3).toDateString(), "Julia"],
    ];
    const data2 = [
        ["Reuniones", "Aprobado"],
        ["Ingesoft I", "Pendiente"],
        ["Electivas", "Pendiente"],
        ["Creditos", "Aprobado"],
    ];
    const options = {
        filterType: 'checkbox',
        enableNestedDataAccess: '.',
        responsive: 'vertical',
        filter: true,
    };
    const options2 = {
        filterType: 'dropdown',
        download: 'false',
        
    };
    return (
        <Grid container direction={'row'} alignItems={'center'} justifyContent={'center'}>
            <Grid item xs={12}>
                <Card sx={{ mt: 5 }} style={{ color: '#023047', backgroundColor: '#219ebc' }}>
                    <Typography sx={{ml:3}} style={{ fontWeight: 'bold' }}>Tabla de Aprobación</Typography>
                    <CardContent>
                        <MUIDataTable
                            title={"Estudiantes"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </CardContent>
                </Card>

                <Card sx={{ mt: 5 }} style={{ color: '#023047', backgroundColor: '#219ebc' }}>
                    <Typography sx={{ml:3}} style={{ fontWeight: 'bold' }}> Tabla prerrequisitos</Typography>
                    <CardContent>
                        <MUIDataTable
                            title={"Prerrequisitos"}
                            data={data2}
                            columns={columns2}
                            options={options2}
                        />
                    </CardContent>
                </Card>
                
            </Grid>
        </Grid>
    )




}
