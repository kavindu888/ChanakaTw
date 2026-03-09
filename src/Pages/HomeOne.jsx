import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import BannerOne from '../Components/Banner/BannerOne'
import CategoryOne from '../Components/Category/CategoryOne'
import DestinationOne from '../Components/Destination/DestinationOne'
import AboutOne from '../Components/About/AboutOne'
import TourOne from '../Components/Tour/TourOne'
import GalleryOne from '../Components/Gallery/GalleryOne'
import CounterOne from '../Components/Counter/CounterOne'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'

function HomeOne() {
    return (
        <div>
            <HeaderOne />
            <BannerOne />
          
            <CategoryOne />
            <DestinationOne />
            <AboutOne />
            <TourOne />
            <GalleryOne />
            <CounterOne />
           
          
           
            <FooterOne />
            <ScrollToTop />
        </div>
    )
}

export default HomeOne
