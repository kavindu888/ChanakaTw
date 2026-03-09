import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import destinations from '../data/data-destination.json';
import './DestinationDetailsMain.css';

const DESTINATIONS_PER_PAGE = 6;

function DestinationDetailsMain() {
    const { id } = useParams();
    const selectedId = Number.parseInt(id, 10);

    const selectedDestination = useMemo(() => {
        return destinations.find((destination) => destination.id === selectedId) || destinations[0];
    }, [selectedId]);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(destinations.length / DESTINATIONS_PER_PAGE);

    useEffect(() => {
        const pageForSelectedDestination = Math.ceil(selectedDestination.id / DESTINATIONS_PER_PAGE);
        setCurrentPage(pageForSelectedDestination);
    }, [selectedDestination.id]);

    const indexOfLastDestination = currentPage * DESTINATIONS_PER_PAGE;
    const indexOfFirstDestination = indexOfLastDestination - DESTINATIONS_PER_PAGE;
    const currentDestinations = destinations.slice(indexOfFirstDestination, indexOfLastDestination);

    const handlePageChange = (page, event) => {
        event.preventDefault();

        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section className="space destination-details-page">
            <div className="container">
                <div className="row gy-30 align-items-center mb-5">
                    <div className="col-lg-6">
                        <div className="tour-box_img global-img destination-featured-image">
                            <img
                                src={`/assets/images/packages/${selectedDestination.image}`}
                                alt={selectedDestination.title}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="title-area mb-20">
                            <span className="sub-title">Featured Destination</span>
                            <h2 className="sec-title mb-2">{selectedDestination.title}</h2>
                        </div>

                        <p className="sec-text mb-25" style={{ textAlign: 'justify' }}>
                            {selectedDestination.summary}
                        </p>

                        <h4 className="box-title">Highlights</h4>
                        <div className="checklist mb-30">
                            <ul>
                                {selectedDestination.highlights.map((highlight, index) => (
                                    <li key={`${selectedDestination.id}-${index}`}>{highlight}</li>
                                ))}
                            </ul>
                        </div>

                        <Link to="/contact" className="th-btn style2 th-icon">
                            Book Now
                        </Link>
                    </div>
                </div>

                <div className="title-area text-center mt-60">
                    <span className="sub-title">Destination Details</span>
                    <h3 className="sec-title">All Destinations</h3>
                </div>

                <div className="row gy-30">
                    {currentDestinations.map((destination) => (
                        <div className="col-xl-4 col-md-6 d-flex" key={destination.id}>
                            <div className="tour-box th-ani h-100 destination-details-card">
                                <div className="tour-box_img global-img destination-card-image">
                                    <img src={`/assets/images/packages/${destination.image}`} alt={destination.title} />
                                </div>
                                <div className="tour-content destination-card-content">
                                    <h4 className="box-title mb-2">{destination.title}</h4>
                                    <p className="sec-text mb-20 destination-card-summary">{destination.summary}</p>
                                    <Link to={`/destination/${destination.id}`} className="th-btn style4 th-icon">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="th-pagination text-center mt-60 mb-0">
                    <ul>
                        {currentPage > 1 && (
                            <li>
                                <Link
                                    className="next-page"
                                    to="#"
                                    onClick={(event) => handlePageChange(currentPage - 1, event)}
                                >
                                    Previous
                                </Link>
                            </li>
                        )}

                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index + 1}>
                                <Link
                                    className={currentPage === index + 1 ? 'active' : ''}
                                    to="#"
                                    onClick={(event) => handlePageChange(index + 1, event)}
                                >
                                    {index + 1}
                                </Link>
                            </li>
                        ))}

                        {currentPage < totalPages && (
                            <li>
                                <Link
                                    className="next-page"
                                    to="#"
                                    onClick={(event) => handlePageChange(currentPage + 1, event)}
                                >
                                    Next <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default DestinationDetailsMain;
