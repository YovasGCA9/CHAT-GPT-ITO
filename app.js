// Configuración del .env 
require('dotenv').config({path:'./.env'});

const llave = process.env.API_KEY;

//Configuración del servidor
const Server = require('./models/server');

const server = new Server();

server.listen();