import "./Header.css"
import { NavLink } from "react-router-dom"
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
export default function Header(){
    return (
        <header className="header">
            <p>Lotus & Flame</p>
            <nav>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About Us</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
            </nav>
            <nav>
                <NavLink to="/login"><FaUser /></NavLink>
                <NavLink to="/cart"><FaShoppingCart /></NavLink>
            </nav>
        </header>
    )
}