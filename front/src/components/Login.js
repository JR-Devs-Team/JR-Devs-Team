import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Login = () => {
    return (
        <Fragment>
            <div>
                {/* Custom styles for this template */}
                <main className="form-signin">
                    <form>
                        <div className='navbar-brand'>
                            <a href="/">
                                <img className='image-logo' src="../Usuario.jpg" alt="Logo" />
                            </a>
                        </div>
                        <h1 className="h3 mb-3 fw-normal">Inicio de Sesion</h1>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Correo Electronico</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" defaultValue="remember-me" /> Recordarme
                            </label>
                        </div>
                        <Link to={`/ListarProductos`} id="view_btn" className="btn btn-primary">
                            Ingresar
                        </Link>

                    </form>
                </main>
            </div>
        </Fragment>
    )
}

export default Login