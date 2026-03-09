import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, onClose }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRefs = useRef({});

    // Toggle dropdown menu
    const toggleMenu = (index) => {
        if (index !== 6) {
            setActiveMenu(activeMenu === index ? null : index);
        }
    };

    // Apply height animation when activeMenu changes
    useEffect(() => {
        Object.keys(menuRefs.current).forEach((key) => {
            const submenu = menuRefs.current[key];
            if (submenu) {
                submenu.style.height = activeMenu === Number(key) ? `${submenu.scrollHeight}px` : "0px";
            }
        });
    }, [activeMenu]);

    return (
        <div className={`th-menu-wrapper onepage-nav ${isOpen ? "th-body-visible" : ""}`}
            style={{ visibility: isOpen ? "visible" : "hidden" }}>

            <div className="th-menu-area text-center">
                <button className="th-menu-toggle" onClick={onClose} aria-label="Close">
                    <i className="fal fa-times" />
                </button>

                <div style={{background:'green'}} className="mobile-logo col-12">
                    <Link to="/">
                        <img className='col-11' src="/assets/images/logo.png" alt="chanatravels" />
                    </Link>
                </div>

                <div className="th-mobile-menu">
                    <ul>
                        {/* Home */}
                        <li><Link to="/">Home</Link></li>

                        {/* About Us */}
                        <li><Link to="/about">About Us</Link></li>

                        {/* Destination */}
                        <li className={`menu-item-has-children th-item-has-children ${activeMenu === 2 ? "th-active" : ""}`}>
                            <Link to="#" onClick={() => toggleMenu(2)}>Destination</Link>
                            <ul
                                ref={(el) => (menuRefs.current[2] = el)}
                                className="th-submenu"
                                style={{ height: "0px", overflow: "hidden", transition: "height 0.3s ease-in-out" }}
                            >
                                <li><Link to="/destination">Destination</Link></li>
                                <li><Link to="/destination/1">Destination Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
