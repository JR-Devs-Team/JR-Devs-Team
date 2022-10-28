import React, { Fragment } from 'react'

const IngresoProductos = () => {
    return (
        <Fragment>
            <form className="row g-3">
                <div className="col-md-4">
                    <label htmlFor="validationDefault01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="Nombre del Producto" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationTextarea" className="form-label">Descripcion</label>
                    <textarea className="form-control" id="validationTextarea" placeholder="Descripcion del Producto" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault03" className="form-label">Categoria</label>
                    <select class="form-control" required aria-label="selecccione Categoria">
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
                    <input class="form-control" type="file" id="formFileMultiple" multiple/>
                </div>
                <div className="col-md-3">
                    <br></br>
                    <label htmlFor="validationDefault05" className="form-label">Precio</label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="Precio del Producto" required />
                </div>
                <div className="col-12">
                <br></br>
                    <button className="btn btn-primary" type="submit">Agregar</button>
                </div>
            </form>
        </Fragment>
    )
}

export default IngresoProductos