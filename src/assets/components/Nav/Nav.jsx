import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to={"/"} className="nav__link">Home</Link>
                </li>
                <li className="nav__item">
                    <Link to={"/about"} className="nav__link">Nosotros</Link>
                </li>
                <li className="nav__item">
                    <Link to={"/contact"} className="nav__link">Contacto</Link>
                </li>
                <li className="nav__item">
                    <Link to={"/products"} className="nav__link">Productos</Link>
                </li>
                <li className="nav__item">
                    <Link to={"/cart"} className="nav__link">Carrito</Link>
                </li>
                <li className="nav__item">
                    <Link to={"/login"} className="nav__link">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav