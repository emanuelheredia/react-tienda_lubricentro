import React from "react";
import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";

const NavBar=()=>{
        return (
            <div className="encabezado shadow bg-primary container-fluid">
                <NavLink className="col-md-7 text-white text-decoration-none"  to="/"><h2 className="col-md-7 text-white ">LUBRICANTES H&H</h2></NavLink>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container justify-content-end">
                        <button className="navbar-toggler flex-row-reverse " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center">
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white active"  aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white active"  aria-current="page" to="/productos">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white active"  to="/productos/lubricantes">Lubricantes</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white active"  to="/productos/filtros">Filtros</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white active"  to="/misordenes">Mis Órdenes</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white active"  to="/carrito"><CartWidget/></NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            )
}
export default NavBar;