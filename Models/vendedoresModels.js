// vendedor.js
const mongoose = require('mongoose');

const vendedorSchema = new mongoose.Schema({
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  totalVentas: Number,
});

const Vendedor = mongoose.model('Vendedor', vendedorSchema);

module.exports = Vendedor;
