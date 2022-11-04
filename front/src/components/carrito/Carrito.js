import React, { Fragment, useState} from 'react'
import { Link } from 'react-router-dom'



const Carrito = () => {
    const [quantity, setQuantity] = useState(1)

    const increaseQty = () => {
        const contador = document.querySelector('.count')
        const qty = contador.valueAsNumber+1;
        setQuantity(qty)
     }
  
     const decreaseQty = () => {
      const contador = document.querySelector('.count')
  
      const qty = contador.valueAsNumber-1;
      setQuantity(qty)
   }

    //Json de ejemplo
   let cartItems=[
        {
            "_id":"6355",
            "nombre":"Caja de Herramientas",
            "precio":52000,
            "imagen":"./images/productos/Caja.png",
            "inventario":50,
        },       
        {
        
            "_id":"6354",
            "nombre":"Pistola",
            "precio":15000,
            "imagen":"./images/productos/Pistola.png",
            "inventario":40,
        },       
        {
        
            "_id":"6353",
            "nombre":"revolvedor",
            "precio":25000,
            "imagen":"./images/productos/Mezclador.png",
            "inventario":20,
        },       
        {
            "_id":"6352",
            "nombre":"sonda",
            "precio":19000,
            "imagen":"./images/productos/Guia.png",
            "inventario":20,
        
        }
   ]    

cartItems = Array.from(cartItems);

    return (
        <Fragment>
            
            

            {cartItems.length === 0 ? <h2 className="mt-5">Su carrito esta vacio</h2> : (
                <Fragment>
                    
                    <h2 className="mt-5">Su Carrito: <b>{cartItems.length} items</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">

                        {cartItems && cartItems.map (item => (
                                <Fragment>
                                    <hr />

                                    <div className="cart-item" key={item.nombre}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.imagen} alt={item.nombre} height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link to={`/producto/${item._id}`}>{item.nombre}</Link>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">${item.precio}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-info" onClick={decreaseQty}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                                    <span className="btn btn-success" onClick={increaseQty}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="fa fa-trash btn btn-danger" ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            
                        ))}
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Total de la Compra</h4>
                                <hr />
                                <p>Subtotal:  <span className="order-summary-values">$109000</span></p>
                                <p>Est. total: <span className="order-summary-values">$120.000</span></p>

                                <hr />
                                <button id="checkout_btn" className="btn btn-outline-success">Comprar!</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Carrito