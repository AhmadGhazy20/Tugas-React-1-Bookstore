import { Link } from 'react-router';

function HeaderContent() {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
                <Link
                    to="/"
                    className="d-inline-flex align-items-center text-decoration-none"
                >
                    <i
                        className="fa-solid fa-book"
                        style={{ color: "rgb(116, 192, 252)" }}
                    ></i>
                    <span className="ms-2 fs-4 text-dark fw-bold">
                        bookstore
                    </span>
                </Link>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <Link to="/" className="nav-link px-2 text-dark">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/books" className="nav-link px-2 text-dark">
                        Books
                    </Link>
                </li>

                <li>
                    <Link to="/team" className="nav-link px-2 text-dark">
                        Team
                    </Link>
                </li>

                <li>
                    <Link to="/contact" className="nav-link px-2 text-dark">
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="col-md-3 text-end">
                <Link to="/login">
                    <button type="button" className="btn btn-outline-primary me-2">
                        Login
                    </button>
                </Link>

                <Link to="/register">
                    <button type="button" className="btn btn-primary">
                        Register
                    </button>
                </Link>
            </div>
        </header>
    );
}

export default HeaderContent;