exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        success:true,
        Message: "En esta se ve los productos"
    })
}