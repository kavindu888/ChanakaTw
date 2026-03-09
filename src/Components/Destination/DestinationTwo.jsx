import React, { useState } from "react";
import { Link } from "react-router-dom";

function DestinationTwo() {
    const destinations = [
        { name: "Temple of Tooth", image: "daladamaligawa.jpg", listings: 28 },
        { name: "Ella", image: "ella.jpg", listings: 15 },
        { name: "Sigiriya", image: "sigiriya.jpg", listings: 22 },
        { name: "Yala National Park", image: "yala.jpg", listings: 25 },
    ];

    const [activeIndex, setActiveIndex] = useState(3); // Default active index (Maldives)

    return (
        <div
            className="bg-top-center position-relative space"
            id="destination-sec"
            style={{ backgroundImage: "url('/assets/img/destination/popBg.jpg')", backgroundRepeat: "no-repeat",backgroundSize: "cover" }}
        >
            <div className="container shape-mockup-wrap">
                <div className="title-area text-center">
                    <span className="sub-title">Top Destination</span>
                    <h2 className="sec-title">Our Featured Destination</h2>
                </div>
                <div className="row">
                    <div className="destination-list-area">
                        {destinations.map((item, index) => (
                            <div
                                key={index}
                                className={`destination-list-wrap ${index === activeIndex ? "active" : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div
                                    className="destination-list"
                                    style={{ backgroundImage: `url('/assets/img/destination/${item.image}')` }}
                                >
                                    <div className="destination-content">
                                        <h4 className="box-title">
                                            <Link to="/destination/1">{item.name}</Link>
                                        </h4>
                                       
                                    </div>
                                    <Link to="/contact" className="th-btn style2">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="destination-btn text-center mt-60">
                    <Link to="/destination" className="th-btn style3 th-icon">
                        View All
                    </Link>
                </div>
                {/* Shape Mockups with Inline Styles */}
                <div 
                    className="shape-mockup movingX d-none d-xl-block"
                    style={{ top: "8%", left: "-15%" }}
                >
                    <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
                </div>
                <div 
                    className="shape-mockup jump d-none d-xl-block"
                    style={{ top: "23%", right: "-14%" }}
                >
                    <img src="/assets/img/shape/shape_2_2.png" alt="shape" />
                </div>
                <div 
                    className="shape-mockup spin d-none d-xl-block"
                    style={{ bottom: "21%", left: "-14%" }}
                >
                    <img src="/assets/img/shape/shape_2_3.png" alt="shape" />
                </div>
                <div 
                    className="shape-mockup movingX d-none d-xl-block"
                    style={{ bottom: "12%", right: "-14%" }}
                >
                    <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
                </div>
            </div>
        </div>
    );
}

export default DestinationTwo;
