import "./Footer.css";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h3>Quick links</h3>
                <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="https://www.facebook.com/profile.php?id=61567966872695"><FaFacebook /></Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="https://www.instagram.com/sazziestreet/"><FaInstagram /></Link>
                    <Link to="/our-story">Our Story</Link>
                    <Link to="https://www.tiktok.com/@sazziestreet"><FaTiktok /></Link>
                </div>
            </div>
            <div className="footer-logo">
                SazzieStreet Logo Here
            </div>
            <div className="footer-section">
                <h3>Become our member</h3>
                <p>Want to learn more about SazzieStreet?</p>
                <button>Register your account <span style={{ marginLeft: '0.5rem' }}><FaArrowRight /></span></button>
            </div>
        </div>
        <div className="footer-copy"><FaRegCopyright /> {new Date().getFullYear()} SazzieStreet. All rights reserved.</div>
    </footer>
  );
}