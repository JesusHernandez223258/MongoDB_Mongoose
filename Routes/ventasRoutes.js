const express = require("express");
const router = express.Router();
const ventaController = require("../Controllers/ventaController");

router.post("/ventas", ventaController.agregarVenta);
router.get(
  "/ventas/vendedor/:vendedor",
  ventaController.buscarVentasPorVendedor
);
router.delete("/ventas/:id", ventaController.borrarVentasPorFecha);
router.put("/ventas/:id", ventaController.modificarVenta);

module.exports = router;
