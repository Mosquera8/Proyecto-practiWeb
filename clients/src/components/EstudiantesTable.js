import React from 'react'
import { AppBar, BottomNavigation, Container, Box, Button, Toolbar, Typography, Grid, Card, CardContent } from '@mui/material'

import MUIDataTable from "mui-datatables";



export default function EstudiantesTable() {
    const columns = ["Name", "Company", "City", "State"];
    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    const options = {
        filterType: 'checkbox',
        BottomNavigation: 'aprobar'
    };
    return (
        <Grid container direction={'row'} alignItems={'center'} justifyContent={'center'}>
            <Grid item xs={12}>
                <Card sx={{mt: 5}} style={{color:'#023047'}}>
                    <Typography style={{fontWeight:'bold'}}> Tabla de Aprobación</Typography>
                    <CardContent>

                        <MUIDataTable
                            title={"Employee List"}
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
