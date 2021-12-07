import React from "react";
import CartWidget from "./CartWidget";

const NavBar=()=>{
        return (
            <>
            <div className="encabezado shadow p-3 bg-primary container-fluid">
                <h2 className="col-md-7 text-white">LUBRICANTES H&H</h2>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container justify-content-end">
                        <button className="navbar-toggler flex-row-reverse " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center">
                            <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="...">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="...">Tienda</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active text-white" href="...">Nosotros</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active text-white" href="..."><CartWidget/></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            </>
            )
}
export default NavBar;