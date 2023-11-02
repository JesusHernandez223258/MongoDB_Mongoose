const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ExamenApi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Conexión a la BD exitosa...");
});

connection.on("error", (err) => {
  console.log("Error en la conexión a la BD: ", err);
});

const clientesRoutes = require("./Routes/clientesRoutes");
const vehiculosRoutes = require("./Routes/vehiculosRoutes");
const vendedoresRoutes = require("./Routes/vendedoresRoutes");
const ventasRoutes = require("./Routes/ventasRoutes");

app.use("/clientes", clientesRoutes);
app.use("/vehiculos", vehiculosRoutes);
app.use("/vendedores", vendedoresRoutes);
app.use("/ventas", ventasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
