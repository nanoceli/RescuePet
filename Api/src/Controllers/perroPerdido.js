const perroPerdido = require("../Models/animalPerdido.js");

const perro_perdido = async (req, res) => {
    const perro_perdido = new perroPerdido(req.body);

    try {
        await perro_perdido.save();
        res.send(perro_perdido);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = perro_perdido;