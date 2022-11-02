import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#D1C9FF'}} >
                <a href="/">
                    <img className='image-logo' src="./Logo.png" alt="YeJen Logo" />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">                        
                        <li class="nav-item">
                            <Link to={`/IngresoProductos`} id="view_btn" className="btn btn-block">
                                Gestión de Productos
                            </Link>
                        </li>
                        <li class="nav-item ">
                            <Link to={`/ListarProductos`} id="view_btn" className="btn btn-block">
                                Lista de Productos
                            </Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header