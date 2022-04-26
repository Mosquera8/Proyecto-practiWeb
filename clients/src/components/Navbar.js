import { AppBar, BottomNavigation, Container, Box, Button, Toolbar, Typography } from '@mui/material'
import {Link,useNavigate} from 'react-router-dom'
import React from 'react'

export default function NavBar() {
    const navigate = useNavigate();
  return (

    <Box sx={{ flexGrow: 1}}>
        <AppBar position='static' color='transparent'>
            <Container>
                <Toolbar>
                    <Typography variant='h3' sx={{ flexGrow: 1}}>
                        <Link to="/" style={{textDecoration:'none', color:'#023047'}}>PractiWeb</Link>
                    </Typography>
                    <Button variant='contained' style={{backgroundColor:'#fb8500'}} onClick={()=> navigate("/tablaEstudiantes/new")}>
                        Agragar Estudiantes
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
  )

}
