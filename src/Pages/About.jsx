import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import AboutFour from '../Components/About/AboutFour'
import ElementSection from '../Components/Elements/ElementSection'
import GalleryFive from '../Components/Gallery/GalleryFive'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'

function About() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="About Tourm"
            />
            <AboutFour />
            <GalleryFive />
            <ElementSection />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default About
