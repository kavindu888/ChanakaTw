import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import { Link } from 'react-router-dom';
import Axios from 'axios';



function TourOne() {

  const getPackageDetails =  async() => {

  }

  getPackageDetails();

  return (
    <section
      className="tour-area position-relative bg-top-center overflow-hidden space bg-no-repeat"
      id="service-sec"
      style={{ backgroundImage: 'url(/assets/img/home/mpt.jpg)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="title-area text-center">
              <span className="sub-title">Best Place For You</span>
              <h2 className="sec-title">Most Popular Tour</h2>
              <p className="sec-text">
          Discover stunning destinations across Sri Lanka, offering unforgettable scenery, culture, and travel experiences for every kind of explorer.  </p>
            </div>
          </div>
        </div>
        <div className="slider-area tour-slider">
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
            spaceBetween={24}
            grabCursor={true}
            className="swiper th-slider has-shadow slider-drag-wrap"
          >
            <SwiperSlide key="tour1">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                 <img src="/assets/images/packages/8.png" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Galle Tour</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.7</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.7</span> Rating)
                    </Link>
                  </div>
             
                  <div className="tour-action">
                  
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour2">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/images/packages/5.png" alt="Italy Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Ella Tour </Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">5</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">5</span> Rating)
                    </Link>
                  </div>
                 
                  <div className="tour-action">
                  
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour3">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/images/packages/3.png" alt="Dubai Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Weligama Tour</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                 
                  <div className="tour-action">
                 
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour4">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/images/packages/2.png" alt="Switzerland Tour" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Ratnapura Tour</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.9</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.9</span> Rating)
                    </Link>
                  </div>
                 
                  <div className="tour-action">
                   
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>





                 <SwiperSlide key="tour5">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/images/packages/10.png" alt="Switzerland Tour" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Negambo Tour</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.6</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.5</span> Rating)
                    </Link>
                  </div>
                 
                  <div className="tour-action">
                   
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>



            
                 <SwiperSlide key="tour6">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/images/packages/6.png" alt="Switzerland Tour" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Nuwara Eliya Tour</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                 
                  <div className="tour-action">
                   
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>


            
                 <SwiperSlide key="tour7">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/images/packages/11.png" alt="Switzerland Tour" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Dambulla Tour</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.9</span> (4.9 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.9</span> Rating)
                    </Link>
                  </div>
                 
                  <div className="tour-action">
                   
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
    



    
                 <SwiperSlide key="tour8">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/images/packages/12.png" alt="Switzerland Tour" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Polonnaruwa Tour</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.7</span> (4.7 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.7</span> Rating)
                    </Link>
                  </div>
                 
                  <div className="tour-action">
                   
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>



            
                 <SwiperSlide key="tour9">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/images/packages/13.png" alt="Switzerland Tour" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Trinco Tour</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.6</span> (4.6 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.6</span> Rating)
                    </Link>
                  </div>
                 
                  <div className="tour-action">
                   
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>



            
                 <SwiperSlide key="tour10">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/images/packages/14.png" alt="Switzerland Tour" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link to="/tour-details">Arugambay Tour</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                 
                  <div className="tour-action">
                   
                    <Link to="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TourOne;
