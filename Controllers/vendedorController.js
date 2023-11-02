const express = require("express");
const Vendedor = require("../Models/vendedoresModels");

const vendedorController = {
  // Agregar Vendedor
  crearVendedor: async (req, res) => {
    try {
      const vendedor = new Vendedor(req.body);
      await vendedor.save();
      res.status(201).json(vendedor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Buscar Vendedor por numero de compra
  buscarVendedorPorNombre: async (req, res) => {
    try {
      const vendedor = await Vendedor.find({ nombre: req.params.nombre });
      res.json(vendedores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Borrar Vendedor
  borrarVendedor: async (req, res) => {
    try {
      const vendedor = await Vendedor.findByIdAndRemove(req.params.id);
      if (!vendedor) {
        return res.status(404).json({ error: "Vendedor no encontrado" });
      }
      res.json({ message: "Vendedor eliminado con éxito" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};