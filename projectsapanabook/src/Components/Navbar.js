import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-dark navbar-expand-lg sticky-top flex-nowrap" id="top_nav">
                <div className="container-fluid">
                    <div className="row m-0">
                        <div className="col-2 p-0">
                            <Link className="navbar-brand" to="/" ><img src="./images/logo123.png" alt="Logo" className=" img-fluid w-100" /></Link>
                        </div>
                        <div className="col-10 p-0 pt-3">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/BuySell">Buy/Sell</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/About">About</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Contact">Contact</Link>
                                    </li>
                                </ul>
                                <form id="searchform" className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchbox" />
                                    <button className="btn btn-$orange" type="submit"><i class="bi bi-search " id="searchbutton"></i></button>
                                </form>

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/LoginSignup">Login/SignUp</Link>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;