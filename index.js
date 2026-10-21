const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./configuracion/db/conexion")

const app = express();

app.use(cors());
app.use(express.json());

const authRutas = require('./rutas/auth.routes');
app.use('/api/auth', authRutas);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('el servidor funciona');
});

app.listen(PORT, () => {
    console.log(`el servidor funciona ${PORT}`);
});