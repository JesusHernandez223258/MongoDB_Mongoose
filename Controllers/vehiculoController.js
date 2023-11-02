const express = require("express");
const Vehiculo = require("../Models/vehiculoModels");

const vehiculoController = {
  // Agregar Vehículo
  agregarVehiculo: async (req, res) => {
    try {
      const vehiculo = new Vehiculo(req.body);
      await vehiculo.save();
      res.status(201).json(vehiculo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Buscar Vehiculo por modelo
  buscarVehiculoPorModelo: async (req, res) => {
    try {
      const vehiculo = await Vehiculo.find({ modelo: req.params.modelo });
      res.json(vehiculos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Buscar Vehículo por modelo y año
  buscarVehiculoPorModeloYAnio: async (req, res) => {
    try {
      const { modelo, anio } = req.params;
      const vehiculos = await Vehiculo.find({ modelo, anio });
      res.json(vehiculos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Borrar Vehículo
  borrarVehiculo: async (req, res) => {
    try {
      const vehiculos = await Vehiculo.findByIdAndRemove(req.params.id);
      if (!vehiculos) {
        return res.status(404).json({ error: "Vehiculo no encontrado" });
      }
      res.json({ message: "Vehiculo eliminado con éxito" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};