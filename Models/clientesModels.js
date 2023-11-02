// cliente.js
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  telefono: String,
  numeroCompra: { type: String, unique: true },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
