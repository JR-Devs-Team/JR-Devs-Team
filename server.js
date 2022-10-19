const app=require("./app")
//Setear el archivo de configuracoipn
const dotenv=require("dotenv");
dotenv.config({path:'ciclo4/config/config.env' })

const server=app.listen(process.env.PORT, ()=> {
    console.log(`server iniciado correctamente en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})