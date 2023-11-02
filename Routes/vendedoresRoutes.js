const express = require("express");
const router = express.Router();
const vendedorController = require("../Controllers/vendedorController");

router.post("/vendedores", vendedorController.crearVendedor);
router.get(
  "/vendedores/nombre/:nombre",
  vendedorController.buscarVendedorPorNombre
);
router.delete("/vendedores/:id", vendedorController.borrarVendedor);

module.exports = router;
