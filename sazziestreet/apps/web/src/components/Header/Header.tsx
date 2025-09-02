import "./Header.css"
import { NavLink } from "react-router-dom"
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import {useState} from "react"
export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <header className="header">
                <p>SazzieStreetLogoHere</p>
                <nav>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
                    <NavLink to="/our-story" className={({ isActive }) => (isActive ? "active" : "")}>Our Story</NavLink>
                </nav>
                <nav>
                    <NavLink to="/login"><FaUser /></NavLink>
                    <NavLink to="/cart"><FaShoppingCart /></NavLink>
                </nav>
            </header>
            <header className="header-mobile">
                <div className="mobile-nav">
                    <p>SazzieStreetLogoHere</p>
                    <nav>
                        <div
                            className={`hamburger${menuOpen ? " open" : ""}`}
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            <GiHamburgerMenu />
                        </div>
                    </nav>
                </div>
                <div className={`mobile-nav-links${menuOpen ? " open" : ""}`}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
                    <NavLink to="/our-story" className={({ isActive }) => (isActive ? "active" : "")}>Our Story</NavLink>
                    <NavLink to="/login"><FaUser /></NavLink>
                    <NavLink to="/cart"><FaShoppingCart /></NavLink>
                </div>
            </header>
        </div>
    )
}