import { Link } from 'react-router-dom'

function AboutFour() {
   return (
      <div className="about-area position-relative overflow-hidden overflow-hidden space" id="about-sec">
         <div className="container shape-mockup-wrap">
            <div className="row">
               <div className="col-xl-7">
                  <div className="img-box3">
                     <div className="img1">
                        <img src="/assets/images/agency/3.png" alt="About" />
                     </div>
                     <div className="img2">
                        <img src="/assets/images/agency/2.png" alt="About" />
                     </div>
                     <div className="img3 movingX">
                        <img src="/assets/images/agency/1.png" alt="About" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="ps-xl-4">
                     <div className="title-area mb-20">
                        <span className="sub-title style1 ">Welcome To Tourm</span>
                        <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                           We are world reputeted travel agency
                        </h2>
                     </div>
                     <p className="pe-xl-5">
                        Experience the beauty, culture, and adventure of Sri Lanka with a trusted travel 
                        agency dedicated to creating unforgettable journeys. We specialize in crafting 
                        personalized tours that showcase the island’s breathtaking landscapes—from misty 
                        mountains and golden beaches to ancient temples and vibrant wildlife reserves.
                     </p>
                     <p className="mb-30 pe-xl-5">
                        {" "}
                        Our professional team ensures every traveler enjoys a seamless and memorable holiday, 
                        offering expert guidance, comfortable transportation, and handpicked accommodations. 
                        Whether you seek relaxation, adventure, culture, or a mix of everything, we design tours 
                        that suit your style and budget.Discover iconic destinations like Kandy, Nuwara Eliya, 
                        Ella, Sigiriya, Galle, and Bentota, along with hidden gems that reveal the true heart of 
                        Sri Lanka. With us, every moment becomes a story worth telling.Book your journey today and 
                        let Sri Lanka’s charm inspire your next adventure.
                     </p>
                     <div className="about-item-wrap">
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_1.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Exclusive Trip</h5>
                              <p className="about-item_text">
                                  Enjoy carefully crafted travel experiences made just for you with unmatched comfort.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_2.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Safety First Always</h5>
                              <p className="about-item_text">
                                 Travel with complete peace of mind, knowing your well-being 
                                 is our utmost priority from start to finish.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_3.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Professional Guide</h5>
                              <p className="about-item_text">
                                   Explore every destination with expert guidance for a safe and meaningful journey.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="mt-35">
                        <Link to="/contact" className="th-btn style3 th-icon">
                           Contact With Us
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div
               className="shape-mockup movingX d-none d-xxl-block"
               style={{ top: '0%', left: '-18%' }}
            >
               <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
            </div>
            <div
               className="shape-mockup jump d-none d-xxl-block"
               style={{ top: '28%', right: '-15%' }}
            >
               <img src="/assets/img/shape/shape_2_2.png" alt="shape" />
            </div>
            <div
               className="shape-mockup spin d-none d-xxl-block"
               style={{ top: '18%', left: '-112%' }}
            >
               <img src="/assets/img/shape/shape_2_3.png" alt="shape" />
            </div>
            <div
               className="shape-mockup movixgX d-none d-xxl-block"
               style={{ bottom: '18%', right: '-12%' }}
            >
               <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
            </div>
         </div>
      </div>
   )
}

export default AboutFour
