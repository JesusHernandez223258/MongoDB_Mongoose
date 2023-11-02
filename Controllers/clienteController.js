const express = require("express");
const Cliente = require("../Models/clientesModels");

const clienteController = {
  // Agregar Cliente
  crearCliente: async (req, res) => {
    try {
      const cliente = new Cliente(req.body);
      await cliente.save();
      res.status(201).json(cliente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Buscar Cliente por numero de compra
  buscarClientePorNOCompra: async (req, res) => {
    try {
      const cliente = await Cliente.find({ email: req.params.numeroCompra });
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Borrar Cliente
  borrarCliente: async (req, res) => {
    try {
      const cliente = await Cliente.findByIdAndRemove(req.params.id);
      if (!cliente) {
        return res.status(404).json({ error: "Cliente no encontrado" });
      }
      res.json({ message: "Cliente eliminado con éxito" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};