import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <div className="container-fluid px-0 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-4 text-center bg-secondary py-3">
                <div className="d-inline-flex align-items-center justify-content-center">
                    <i className="bi bi-envelope fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Пишете ни</h6>
                        <span>info@sistercake.com</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center bg-primary border-inner py-3">
                <div className="d-inline-flex align-items-center justify-content-center">
                    <Link to="/" className="navbar-brand">
                        <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-dark me-3"></i>Sistercake</h1>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 text-center bg-secondary py-3">
                <div className="d-inline-flex align-items-center justify-content-center">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Обадете ни се</h6>
                        <span>+359 895 678978</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link to="/" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-primary me-3"></i>Sistercake</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto mx-lg-auto py-0">
                <Link to="/" className="nav-item nav-link active">Начало</Link>
                <Link to="/about" className="nav-item nav-link">За нас</Link>
                <Link to="/gallery" className="nav-item nav-link">Галерия</Link>
                <Link to="/comments" className="nav-item nav-link">Клиенти</Link>
                <Link to="/menu" className="nav-item nav-link">Меню</Link>
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Профил</Link>
                    <div className="dropdown-menu m-0">
                        <Link to="/login" className="dropdown-item">Вход</Link>
                        <Link to="/register" className="dropdown-item">Регистрация</Link>
                    </div>
                </div>
                <Link to="/menu" className="nav-item nav-link">Изход</Link>
                <Link to="/contact" className="nav-item nav-link">Контакт</Link>
            </div>
        </div>
    </nav>
        </div>
    )
}