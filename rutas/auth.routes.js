const express = require('express');
const router = express.Router();
const { registrarUsuario } = require("../controladores/auth.controller.js");

router.post("/registro", registrarUsuario)

module.exports = router;