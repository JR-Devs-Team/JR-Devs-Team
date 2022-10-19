const express=require("express");
const { getProducts } = require("./controllers/productsController");
const app =express();

app.use(express.json());
//Importar rutas

const productos= require("./routers/products")
app.use('/api', productos)


//para poder exportar desde otra claswe
module.exports=app;