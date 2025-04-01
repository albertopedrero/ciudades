// Importar módulos
const express = require('express')
const app = express()
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

/*var corsOptions = { 
    origin: 'http://api.openweathermap.org/*',
    optionsSuccessStatus: 200
}*/
// Middlewares
app.use(cors({
    origin: '*', // Permite todas las solicitudes (no recomendado en producción)
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  }));
//app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Importar rutas
const ciudadesAPI =require('./rutas/ciudades')
ciudadesAPI(app)

app.use(express.static('public'), cors(corsOptions))


// Iniciar servidor
var server = app.listen(PORT, () => {
    console.log(`mi app está escuchando en ${server.address().port}`)
})