const express = require("express");
const router = express.Router();
const clienteController = require("../Controllers/clienteController");

router.post("/clientes", clienteController.crearCliente);
router.get(
  "/clientes/numeroCompra/:numeroCompra",
  clienteController.buscarClientePorNOCompra
);
router.delete("/clientes/:id", clienteController.borrarCliente);

module.exports = router;
