import React from 'react'
import { Link } from 'react-router-dom';

function DestinationCard(props) {
    const { destinationID, destinationImage, destinationTitle, destinationPrice } = props;
    return (
        <>
            <div className="tour-box th-ani">
                <div className="tour-box_img global-img">
                    <img src={`/assets/images/packages/${destinationImage}`} alt="" />
                </div>
                <div className="tour-content">
                    <h3 className="box-title">
                        <Link to={`/destination/${destinationID}`}>{destinationTitle ? destinationTitle : 'Ella'}</Link>
                    </h3>
                    <div className="tour-rating">
                        <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                        >
                            <span style={{ width: "100%" }}>
                                Rated
                                <strong className="rating">5.00</strong> out of 5
                                based on <span className="rating">4.8</span>(4.8
                                Rating)
                            </span>
                        </div>
                        <Link
                            to={`/destination/${destinationID}`}
                            className="woocommerce-review-link"
                        >
                           
                        </Link>
                    </div>
                  
                    <div className="tour-action">
                    
                        <Link to="/contact" className="th-btn style4 th-icon">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationCard
