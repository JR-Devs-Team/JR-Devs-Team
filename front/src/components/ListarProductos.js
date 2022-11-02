import React, { Fragment } from 'react'

export const ListarProductos = () => {
    const lista =
        [
            {
                "_id": "1",
                "nombre": "Caja de Herramienta",
                "precio": "38400",
                "descripcion": "",
                "calificacion": 3.9,
                "imagen": [{
                    "public_id": "productos/dsvbpny402gelwugv2le",
                    "url": "./images/productos/Caja.png",
                    "_id": "6359bce4372b9abf2ed43bbc"
                }],
                "categoria": "Bebes",
                "vendedor": "Jenny Martinez",
                "inventario": 50,
                "numCalificaciones": 29,
                "opiniones": []
            },
            {
                "_id": "2",
                "nombre": "Guías de acero para cable",
                "precio": 93000,
                "descripcion": "Guía de acero al alto carbono de fácil arrastre",
                "imagen": [
                    {
                        "public_id": "productos/dsvbpny402gelwugv22e",
                        "url": "./images/productos/Guia.png",
                        "_id": "6359bce4372b9abf2ed43bbc"
                    }
                ],
                "categoria": "Material Electrico",
                "inventario": 20,
            },
            {
                "_id": "3",
                "nombre": "Revolvedor de pintura",
                "precio": 49000,
                "descripcion": "Arillo inferior para no dañar las cubetas",
                "imagen": [
                    {
                        "public_id": "productos/dsvbpny402gelwugv23e",
                        "url": "./images/productos/Mezclador.png",
                        "_id": "6359bce4372b9abf2ed43bbc"
                    }
                ],
                "categoria": "Accesorios",
                "inventario": 10
            },
            {
                "_id": "4",
                "nombre": "Pistolas de aire serie 200",
                "precio": 29800,
                "descripcion": "Cuerpo y vaso de aluminio pulido de 1 L",
                "imagen": [
                    {
                        "public_id": "productos/dsvbpny402gelwugv24e",
                        "url": "./images/productos/Pistola.png",
                        "_id": "6359bce4372b9abf2ed43bbc"
                    }
                ],
                "categoria": "Herramientas",
                "inventario": 40
            }
        ];


    //Comienzo de la Pagina
    return (
        <Fragment>
            <div class="container">
                <ol class="breadcrumb teal lighten-5">
                    <li class="breadcrumb-item font-weight-bold "><a href="/">Inicio</a></li>
                    <li class="breadcrumb-item active font-weight-bold">Lista de Productos</li>
                </ol>
            </div>
            <div class="text-center py-5">
                <h1 class="h3-responsive font-weight-normal">Lista de Productos</h1>
            </div>
            <section id="productos" className="container mt-5">
                <div className="row">
                    <div key={lista[0]._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto image-producto"
                                src={lista[0].imagen[0].url}
                                alt={lista[0].imagen[0].public_id}
                            ></img>
                            <div className="card-body d-flex flex-column">
                                <h5 id="titulo_producto">
                                    <p>{lista[0].nombre}</p>
                                </h5>
                                <p className="card-text"><strong>{lista[0].descripcion}</strong></p>
                                <p className="card-text">${lista[0].precio}</p>
                                <div className="rating mt-auto">
                                    <span id="No_opiniones"> Stock: {lista[0].inventario}</span>
                                </div>

                                <div className="col-12">
                                    <br></br>
                                    <button className="btn btn-primary" type="submit" onClick="">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={lista[1]._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto image-producto"
                                src={lista[1].imagen[0].url}
                                alt={lista[1].imagen[0].public_id}
                            ></img>
                            <div className="card-body d-flex flex-column">
                                <h5 id="titulo_producto">
                                    <p>{lista[1].nombre}</p>
                                </h5>
                                <p className="card-text">{lista[1].descripcion}</p>
                                <p className="card-text">${lista[1].precio}</p>
                                <div className="rating mt-auto">
                                    <span id="No_opiniones"> Stock: {lista[1].inventario}</span>
                                </div>

                                <div className="col-12">
                                    <br></br>
                                    <button className="btn btn-primary" type="submit" onClick="">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={lista[2]._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto image-producto"
                                src={lista[2].imagen[0].url}
                                alt={lista[2].imagen[0].public_id}
                            ></img>
                            <div className="card-body d-flex flex-column">
                                <h5 id="titulo_producto">
                                    <p>{lista[2].nombre}</p>
                                </h5>
                                <p className="card-text">{lista[2].descripcion}</p>
                                <p className="card-text">${lista[2].precio}</p>
                                <div className="rating mt-auto">
                                    <span id="No_opiniones"> Stock: {lista[2].inventario}</span>
                                </div>

                                <div className="col-12">
                                    <br></br>
                                    <button className="btn btn-primary" type="submit" onClick="">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={lista[3]._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto image-producto"
                                src={lista[3].imagen[0].url}
                                alt={lista[3].imagen[0].public_id}
                            ></img>
                            <div className="card-body d-flex flex-column">
                                <h5 id="titulo_producto">
                                    <p>{lista[3].nombre}</p>
                                </h5>
                                <p className="card-text">{lista[3].descripcion}</p>
                                <p className="card-text">${lista[3].precio}</p>
                                <div className="rating mt-auto">
                                    <span id="No_opiniones"> Stock: {lista[3].inventario}</span>
                                </div>

                                <div className="col-12">
                                    <br></br>
                                    <button className="btn btn-primary" type="submit" onClick="">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ListarProductos