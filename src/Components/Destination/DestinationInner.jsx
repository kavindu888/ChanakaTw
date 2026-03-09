import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DestinationCard from './DestinationCard';
import posts from '../data/data-destination.json';
import DestinationCardTwo from './DestinationCardTwo';

function DestinationInner() {
    const [activeTab, setActiveTab] = useState('tab-grid');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <section className="space">
            <div className="container">
                <div className="th-sort-bar">
                    <div className="row justify-content-between align-items-center">

                        <div className="col-md-auto">
                            <div className="sorting-filter-wrap">
                                <div className="nav" role="tablist">
                                    <Link
                                        to="#"
                                        id="tab-destination-grid"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-grid"
                                        role="tab"
                                        aria-controls="tab-grid"
                                        aria-selected="true"
                                        className={`${activeTab === 'tab-grid' ? 'active' : ''}`}
                                        type="button"
                                        onClick={() => setActiveTab('tab-grid')}
                                    >
                                        <i className="fa-light fa-grid-2" />
                                    </Link>
                                    <Link
                                        to="#"
                                        id="tab-destination-list"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-list"
                                        role="tab"
                                        aria-controls="tab-list"
                                        aria-selected="false"
                                        className={`${activeTab === 'tab-list' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('tab-list')}
                                    >
                                        <i className="fa-solid fa-list" />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-9 col-lg-8">
                        <div className="tab-content" id="nav-tabContent">
                            <div className={`tab-pane fade ${activeTab === 'tab-grid' ? 'show active' : ''}`} id="tab-grid" role="tabpanel"
                            >
                                <div className="row gy-30">
                                    {currentPosts.map((data, index) => (
                                        <div key={index} className="col-xxl-4 col-xl-6">
                                            <DestinationCard
                                                destinationID={data.id}
                                                destinationImage={`${data.image}`}
                                                destinationTitle={data.title}
                                                destinationPrice={data.price}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'tab-list' ? 'show active' : ''}`} id="tab-list" role="tabpanel"
                            >
                                <div className="row gy-30">
                                    {currentPosts.map((data, index) => (
                                        <div key={index} className="col-12">
                                            <DestinationCardTwo
                                                destinationID={data.id}
                                                destinationImage={`${data.image}`}
                                                destinationTitle={data.title}
                                                destinationPrice={data.price}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="th-pagination text-center mt-60 mb-0">
                            <ul>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i}>
                                        <Link
                                            className={currentPage === i + 1 ? 'active' : ''}
                                            to="#"
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </Link>
                                    </li>
                                ))}
                                {currentPage < totalPages && (
                                    <li>
                                        <Link className="next-page" to="#" onClick={() => handlePageChange(currentPage + 1)}>
                                            Next <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4">
                        <aside className="sidebar-area style2">



                            <div
                                className="widget widget_offer  "
                                data-bg-src="/assets/img/bg/widget_bg_1.jpg"
                                style={{ backgroundImage: "url(/assets/images/help.png)" ,marginTop:30}}
                            >
                                <div className="offer-banner">
                                    <div className="offer">
                                        <h6 className="box-title">
                                            Need Help? We Are Here To Help You
                                        </h6>
                                        <div style={{ padding: 10,background:'green',borderRadius:40 }} className="about-logo">


                                            <img className='col-11' src="/assets/images/logo.png" alt="chanatravels" />


                                        </div>
                                        <div className="offer">
                                            <h6 className="offer-title">You Get Online support</h6>
                                            <Link className="offter-num" to={+94712328875}>
                                                +94712328875
                                            </Link>
                                        </div>
                                        <Link to="/contact" className="th-btn style2 th-icon">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default DestinationInner
