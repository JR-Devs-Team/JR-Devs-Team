import React, { Fragment } from 'react'

export const IngresoProductos = () => {
    return (
        <Fragment>
            <div class="container">
                <ol class="breadcrumb teal lighten-5">
                    <li class="breadcrumb-item font-weight-bold "><a href="/">Inicio</a></li>
                    <li class="breadcrumb-item active font-weight-bold">Gestión de Productos</li>
                </ol>
            </div>
            <div class="text-center py-5">
                <h1 class="h3-responsive font-weight-normal">Gestión de Productos</h1>
            </div>

            <div class="modal-body">
                <form className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="validationDefault01" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nombre del Producto" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationTextarea" className="form-label">Descripcion</label>
                        <textarea className="form-control" id="validationTextarea" placeholder="Descripcion del Producto" style={{height: '39px'}} required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault03" className="form-label">Categoria</label>
                        <select class="form-control" aria-label="selecccione Categoria" required>
                            <option hidden selected>Selecciona Categoria</option>
                            <option value={1}>Perfumeria</option>
                            <option value={2}>Maquillaje</option>
                            <option value={3}>Cuidado Facial</option>
                            <option value={4}>Cuidado Diario</option>
                            <option value={5}>Bebes</option>
                            <option value={6}>Niños</option>
                            <option value={7}>Hombres</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <br></br>
                        <label for="formFileMultiple" class="form-label">Imagenes</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple required />
                    </div>
                    <div className="col-md-3">
                        <br></br>
                        <label htmlFor="validationDefault05" className="form-label">Precio</label>
                        <input type="text" className="form-control" id="validationDefault05" placeholder="Precio del Producto" required />
                    </div>
                    <div className="col-12">
                        <br></br>
                        <button className="btn btn-primary" type="submit" onClick="">Agregar</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default IngresoProductos