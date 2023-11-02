// vehiculo.js
const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
  modelo: String,
  anio: Number,
  color: String,
  precio: Number,
  nuevo: Boolean,
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

module.exports = Vehiculo;
