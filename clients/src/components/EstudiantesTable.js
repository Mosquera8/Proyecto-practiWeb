import React from 'react'
import { AppBar, BottomNavigation, Container, Box, Button, Toolbar, Typography, Grid, Card, CardContent } from '@mui/material'

import MUIDataTable from "mui-datatables";



export default function EstudiantesTable() {
    //const columns = ["Codigo","Nombre", "Materias core", "Programa"];
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
         name: "prerrequisitos",
         label: "Prerrequisitos",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "programa",
         label: "Programa",
         options: {
          filter: true,
          sort: false,
         }
        },
       ];
       
    const data = [
        [3003429,"Joe James", true, "Sistemas"],
        [1287734,"John Walsh", false, "Multimedia"],
        [1344768,"Bob Herm", true, "Sistemas"],
        [1276355,"James Houston", true, "Electronica"],
    ];
    const options = {
        filterType: 'checkbox',   
    };
    return (
        <Grid container direction={'row'} alignItems={'center'} justifyContent={'center'}>
            <Grid item xs={12}>
                <Card sx={{mt: 5}} style={{color:'#023047',backgroundColor:'#219ebc'}}>
                    <Typography  style={{fontWeight:'bold'}}> Tabla de Aprobación</Typography>
                    <CardContent>

                        <MUIDataTable
                            title={"Lista Estudiantes"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </CardContent>

                </Card>

                <Card sx={{mt: 5}} style={{color:'#023047',backgroundColor:'#219ebc'}}>
                    <Typography  style={{fontWeight:'bold'}}> Tabla prerrequisitos</Typography>
                    <CardContent>

                        <MUIDataTable
                            title={"Lista Estudiantes"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </CardContent>

                </Card>
            </Grid>
        </Grid>
    )




}
