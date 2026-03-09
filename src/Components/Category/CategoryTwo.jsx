import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function CategoryTwo() {
    const swiperRef = useRef(null);
    const categories = [
        { id: 1, title: "Wildlife", img: "/assets/img/tourCategory/1.jpg" },
        { id: 2, title: "Beach", img: "/assets/img/tourCategory/2.jpg"},
        { id: 3, title: "Hotels", img: "/assets/img/tourCategory/3.jpg" },
        { id: 4, title: "Ayurvedic", img: "/assets/img/tourCategory/4.jpg" },
        { id: 5, title: "adventure", img: "/assets/img/tourCategory/5.jpg" },
        { id: 6, title: "Tea State", img: "/assets/img/tourCategory/6.jpg" },
        { id: 7, title: "Honeymoon", img: "/assets/img/tourCategory/7.jpg" },
        { id: 8, title: "Religious", img: "/assets/img/tourCategory/8.jpg" },
        { id: 9, title: "Cultural & Heritage", img: "/assets/img/tourCategory/9.jpg" },
        { id: 11, title: "Corel", img: "/assets/img/tourCategory/10.jpg"},
        { id: 12, title: "Beach & Water Adventures", img: "/assets/img/tourCategory/11.jpg"},
        { id: 13, title: "Beach Holiday", img: "/assets/img/tourCategory/12.jpg"},
        { id: 14, title: "Dolphin and Whale watching", img: "/assets/img/tourCategory/13.jpg"},
        { id: 15, title: "Hiking", img: "/assets/img/tourCategory/14.jpg"},
        { id: 16, title: "Safari", img: "/assets/img/tourCategory/15.jpg"},
        { id: 17, title: "Camping", img: "/assets/img/tourCategory/16.jpg"},
        { id: 18, title: "Meditation ", img: "/assets/img/tourCategory/17.jpg"},
    ];

    useEffect(() => {
        if (!swiperRef.current) return;

        const swiperInstance = swiperRef.current.swiper;

        // ✅ Start autoplay properly
        if (swiperInstance && swiperInstance.autoplay) {
            swiperInstance.autoplay.start();
        }

        // ✅ Custom pagination with numbers
        if (swiperInstance.pagination) {
            swiperInstance.pagination.renderBullet = function (index, className) {
                let formattedNumber = index + 1 < 10 ? "0" + (index + 1) : index + 1;
                return `<span class="${className} number">${formattedNumber}</span>`;
            };
            swiperInstance.pagination.init();
            swiperInstance.pagination.update();
        }
        const multiplier = { translate: 0.1, rotate: 0.0 };

        const calculateWheel = () => {
            const slides = document.querySelectorAll(".single2");
            slides.forEach((slide) => {
                const rect = slide.getBoundingClientRect();
                const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
                let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;
                if (ty < 0) ty = 0;

                const transformOrigin = r < 0 ? "left top" : "right top";
                slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`;
                slide.style.transformOrigin = transformOrigin;
            });
        };

        const raf = () => {
            requestAnimationFrame(raf);
            calculateWheel();
        };

        raf();

        return () => cancelAnimationFrame(raf); // Cleanup on unmount
    }, []);

    return (
        <section className="category-area2 bg-top-center">
            <div className="container th-container">
                <div className="title-area text-center">
                    <span className="sub-title">Wonderful Place For You</span>
                    <h2 className="sec-title">Tour Categories</h2>
                </div>

                <Swiper
                    ref={swiperRef}
                    modules={[Pagination]}
                    spaceBetween={60}
                    slidesPerView={5}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    pagination={{ clickable: true, el: ".swiper-pagination", type: "bullets" }}
                    breakpoints={{
                        300: { slidesPerView: 1, spaceBetween: 30 },
                        600: { slidesPerView: 2, spaceBetween: 30 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 40 },
                        1280: { slidesPerView: 5, spaceBetween: 60 },
                    }}
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <div className="category-card single2">
                                <div className="box-img global-img">
                                    <img src={category.img} alt={category.title} />
                                </div>
                                <h3 className="box-title">
                                    <Link to="/destination">{category.title}</Link>
                                </h3>
                                <Link className="line-btn" to="/destination">
                                    See more
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                <div className="swiper-pagination position-relative"></div>
                </Swiper>
            </div>
        </section>
    );
}

export default CategoryTwo;
