const express = require("express");
const cors = require("cors");

//creando un servidor
const app = express();

//setting
// si existe un puerto creado por la base de dato sino usar 4000
app.set("port", process.env.PORT || 4000);

//middlewares
//son funciones que se van a ejecuta antes de que llegue a la url
app.use(cors());
app.use(express.json());

//routes
//definirn la url que el usuario va a poder visitar, React
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

module.exports = app;
