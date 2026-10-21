const db = require('../configuracion/db/conexion');
const hashpass = require('@damianegreco/hashpass');

const registrarUsuario = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        const hashedPassword = hashpass.hashPass(password);

        const [resultado] = await db.query(
            'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
            [nombre, email, hashedPassword]
        );

        res.status(201).json({ mensaje: 'Usuario creado exitosamente', id: resultado.insertId });
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ error: 'Hubo un problema al registrar el usuario' });
    }
};

module.exports = { registrarUsuario };