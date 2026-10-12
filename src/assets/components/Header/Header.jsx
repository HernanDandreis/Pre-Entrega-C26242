import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './Header.css'

const Header = () => {
    return (
        <>
        <header className="header">
            <Link to={"/"} className="header__logo">
                <img src={"/img/pixel-art-logo.jpg"} alt="Logo" className="header__logo-img" />
                <h1 className="header__title">Pixel Art Baby</h1>
            </Link>
        <Nav />
        
        </header>

        </>
    )
}

export default Header