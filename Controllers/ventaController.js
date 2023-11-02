const express = require("express");
const Cliente = require("../Models/clientesModels");
const Vehiculo = require("../Models/vehiculoModels");
const Vendedor = require("../Models/vendedoresModels");
const Venta = require("../Models/ventasModels");

const ventaController = {
  // Agregar Venta
  agregarVenta: async (req, res) => {
    try {
      const venta = new Venta(req.body);
      const vendedor = await Vendedor.findById(req.body.vendedor);
      const cliente = await Cliente.findById(req.body.cliente);
      const vehiculo = await Vehiculo.findById(req.body.vehiculo);
      venta.vendedor = vendedor;
      venta.cliente = cliente;
      venta.vehiculo = vehiculo;
      await venta.save();
      res.status(201).json(venta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Buscar Venta por Vendedor
  buscarVentasPorVendedor: async (req, res) => {
    try {
      const venta = await Ventas.find({ vendedor: req.params.vendedor });
      res.json(venta);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Borrar Publicación por fecha
  borrarVentasPorFecha: async (req, res) => {
    try {
      const venta = await Venta.findByIdAndRemove(req.params.id);
      if (!venta) {
        return res.status(404).json({ error: "Venta no encontrada" });
      }
      res.json({ message: "Venta eliminada con éxito" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Modificar/Actualizar contenido de publicación
  modificarVenta: async (req, res) => {
    try {
      const venta = await Venta.findById(req.params.id);
      if (!venta) {
        return res.status(404).json({ error: "Venta no encontrada" });
      }
      venta.cliente = req.body.cliente;
      venta.vendedor = req.body.vendedor;
      venta.fechaVenta = req.body.fechaVenta;
      venta.precioVenta = req.body.precioVenta;
      venta.metodoPago = req.body.metodoPago;
      await venta.save();
      res.json(venta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};