import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useUserContext } from '../Components/UserProvider';
import { useNavigate } from 'react-router-dom';
import refutokenLogo from '../assets/refutoken.png';

function NavBar() {

    const {user, setUser} = useUserContext()
    const navigate = useNavigate()
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    function logOut(){
        setUser(null);
        localStorage.removeItem('user')
        navigate('/')
        setIsNavExpanded(false); // Asegúrate de cerrar el menú también cuando se desconecta el usuario
    }

    // Función para manejar el cierre del menú
    const closeMenu = () => {
        setIsNavExpanded(false);
    }

    // Función para manejar el clic del botón de chat
    const handleChatClick = () => {
        // URL de la página web que deseas abrir
           const chatUrl = 'https://iebs-chatbot.vercel.app/';
        // Abrir en una nueva pestaña
        window.open(chatUrl, '_blank');
    }

    return (
        <header className='NavBar'>
            <Link to="/" className="brand-logo" onClick={closeMenu}>
                <img src={refutokenLogo} alt="Refutoken Logo" className="logo" />
            </Link>
            <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                {/* Aquí iría el icono de hamburguesa */}
                MENU
            </button>
            <nav className={`navigation-menu ${isNavExpanded ? 'expanded' : ''}`}>
            <Link to="/about-us" onClick={closeMenu}>About Us</Link>
                <Link to="/social-impact" onClick={closeMenu}>Social Impact</Link>
                <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                {
                    user ?
                        <button onClick={logOut}>Logout</button>

                        :

                        <>
                            <Link to="/login" onClick={closeMenu}>Login</Link>
                            <Link to="/register" onClick={closeMenu}>Register</Link>
                        </>
                }
                {/* Botón de chat aquí */}
                <button onClick={handleChatClick} className="chat-button">
                    CHAT
                </button>
            </nav>
        </header>
    )
}

export default NavBar
