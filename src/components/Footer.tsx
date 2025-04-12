import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>Lala's Burger Lounge</h2>
                </div>
                <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Reservations</a></li>
                </ul>
                <div className="footer-social">
                    <a href="#"><i className="bx bxl-facebook"></i></a>
                    <a href="#"><i className="bx bxl-instagram"></i></a>
                    <a href="#"><i className="bx bxl-twitter"></i></a>
                </div>
                <p className="footer-copy">&copy; 2025 Lala's Burger Lounge - All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;