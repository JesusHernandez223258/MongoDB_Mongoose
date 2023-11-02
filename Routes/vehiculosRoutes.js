const express = require("express");
const router = express.Router();
const vehiculoController = require("../Controllers/vehiculoController");

router.post("/vehiculos", vehiculoController.agregarVehiculo);
router.get(
  "/vehiculos/modelo/:modelo",
  vehiculoController.buscarVehiculoPorModelo
);
router.get(
  "/vehiculos/modeloyanio/:modelo/:anio",
  vehiculoController.buscarVehiculoPorModeloYAnio
);
router.delete("/vehiculos/:id", vehiculoController.borrarVehiculo);

module.exports = router;
