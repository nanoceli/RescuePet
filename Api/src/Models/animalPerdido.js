const mongoose = require("mongoose");

const AnimalPerdidoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: false,
    validate(value) {
      if (value < 0) throw new Error("No puede ser menor a 0");
    },
  },
  estado: {
    type: String,
    enum: ['Muy malo', 'Malo', 'Estable', 'Bueno', 'Muy bueno'],
    required: true
  },
  tamaño: {
    type: String,
    enum: ['Grande','Mediano','Chico'],
    required: true
  },
  sexo: {
    type: String,
    enum: ['Macho','Hembra'],
    required: false
  },
  Raza: {
    type: String,
    required: false
  }
});

const Animal = mongoose.model("Animal Perdido", AnimalPerdidoSchema);

module.exports = Animal;