import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Gallery/Modal';

function FooterFour() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    // Function to open the modal with the selected image
    const openModal = (imageSrc, event) => {
        event.preventDefault(); // Prevent default link behavior
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <footer className="footer-wrapper bg-title footer-layout2 shape-mockup-wrap">
            <div className="widget-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                        <div style={{ padding: 10 }} className="about-logo">

                                            <Link to="/">
                                                <img className='col-11' src="/assets/images/logo.png" alt="chanatravels" />
                                            </Link>

                                        </div>
                                    </div>
                                    <p className="about-text">
                                    
                                    </p>
                                    <div className="th-social">
                                        <Link to="https://www.facebook.com/">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                        <Link to="https://wa.me/94712328875" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-whatsapp" />
                                        </Link>

                                        <Link to="https://instagram.com/">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Quick Links</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About us</Link>
                                        </li>

                                        <li>
                                            <Link to="/contact">Tour Booking Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Address</h3>
                                <div className="th-widget-contact">
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/phone.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p >
                                                <Link to="tel:+94712328875" className="info-box_link">
                                                    +94712328875
                                                </Link>
                                                &nbsp;(Call)
                                            </p>

                                            <p >
                                                <Link to="tel:+94712328875" className="info-box_link">
                                                    +94712328875
                                                </Link>
                                                &nbsp;(Whatsapp)
                                            </p>

                                        </div>
                                    </div>

                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/location-dot.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>198 Sunandha Mawatha, Athagahapu Junction, Walgama, Mathara.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <p className="copyright-text">
                                Copyright 2025 <Link to="/">chanatravels</Link>. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-end d-none d-md-block">
                            <div className="footer-card">
                                <span className="title">We Accept</span>
                                <img src="/assets/img/shape/cards.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="shape-mockup movingX d-none d-xxl-block"
                style={{ top: '24%', left: '5%' }}
            >
                <img src="/assets/img/shape/shape_8.png" alt="shape" />
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </footer>

    )
}

export default FooterFour
