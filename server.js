const express = require("express");
const cors = require("cors");
require("dotenv").config();
const conectarDB = require("./config/db");

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static("public"));


conectarDB();


app.use("/api/tareas", require("./routes/tareas"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
