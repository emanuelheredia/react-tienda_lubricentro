const Header=()=>{
    return (
        <>
        <div className="encabezado shadow p-3 bg-primary container-fluid position-fixed">
            <h2 className="col-md-7">LUBRICANTES H&H</h2>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container justify-content-end">
                    <button className="navbar-toggler flex-row-reverse " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-lg-center">
                        <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Tienda</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active text-white" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active text-white" href="#"><span className="material-icons">shopping_cart</span></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
        )
}
export default Header;