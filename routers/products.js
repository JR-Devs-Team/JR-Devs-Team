const express=require("express")
//crea enrutador
const router=express.Router();

const {getProducts}=require("../controllers/productsController")
router.route('/productos').get(getProducts)

module.exports=router;