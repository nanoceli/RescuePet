const gatoPerdido = require("../Models/animalPerdido.js");

const gato_perdido = async (req, res) => {
    const gato_perdido = new gatoPerdido(req.body);

    try {
        await gato_perdido.save();
        res.send(gato_perdido);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = gato_perdido;