const { Router } = require('express');
//const pool = require('../db')

const router = Router();
//! IMPLEMENTAR DB
router.get('/tasks',async (req, res) => {
    res.send('get lista de tareas');
   // const result = await pool.query()
   // console.log(result)
   // res.json('Funcionó')
})

router.post('/tasks',(req, res) => {
    res.send('post lista de estudiantes');
})

router.delete('/tasks',(req, res) => {
    res.send('delete lista de estudiantes');
})

router.put('/tasks',(req, res) => {
    res.send('put/updating lista de estudiantes');
})

module.exports = router;
