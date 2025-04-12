import React, { useState } from 'react';


const Navbar: React.FC = () => {
    // Estado para controlar se o menu está ativo ou não
    const [isActive, setIsActive] = useState(false);

    // Função para alternar o menu ao clicar no ícone
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
    <header>
            <nav className="navegador">
                <a href="#" className="logo">
                    <img width="35" height="35" src="https://img.icons8.com/color/48/hamburger.png" alt="hamburger" /> 
                    Lala's Burger Lounge
                </a>
                <ul className={`nav-menu ${isActive ? "active" : ""}`}>
                    <li className="nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Reservations</a>
                    </li>
                    <li className="nav-item">
                        <i className='bx bx-search'></i>
                    </li>
                </ul>
                <div className={`menu ${isActive ? "active" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
