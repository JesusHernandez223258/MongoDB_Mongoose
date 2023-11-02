// venta.js
const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
  },
  vehiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehiculo',
  },
  vendedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendedor',
  },
  fechaVenta: Date,
  precioVenta: Number,
  metodoPago: String,
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;
