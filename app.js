const express = require('express');
const app = express();
const cors = require('cors')
const fileUpload = require('express-fileupload')
 

/* Importación de rutas */

const tipoEquipo = require('./routes/tipoEquipo')
const estado = require('./routes/estado')
const marca = require('./routes/marca')
const usuario = require('./routes/usuario')
const inventario = require('./routes/inventario')


/* middlewares */
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(fileUpload({useTempFiles:true,
        tempFileDir: '/tmp/' }))
app.use(cors())

/* middleware de subida de foto */
app.use(cors({origin:'*'}))

/* Utilizar sustantivos en plural para una URI */
app.use('/api/tipoequipos', tipoEquipo)
app.use('/api/marcas', marca)
app.use('/api/estados', estado)
app.use('/api/usuarios', usuario)
app.use('/api/inventarios', inventario)

app.get('/tipoequipos', (req, res) =>{
   return res.json({});
});

app.get('/marcas', (req, res) =>{
   return res.json({});
});

app.get('/estados', (req, res) =>{
   return res.json({});
});

app.get('/usuarios', (req, res) =>{
   return res.json({});
});

app.get('/inventarios', (req, res) =>{
   return res.json({});
});



module.exports = app;