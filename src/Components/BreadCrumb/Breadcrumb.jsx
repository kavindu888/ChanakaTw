import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({ title, description, bgImage }) {
    return (
        <>
            <div
                className="breadcumb-wrapper "
                style={{ backgroundImage: `url(${'/assets/img/about/bannerAboutpng.png'})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
            >
             
            </div>
        </>

    )
}

export default Breadcrumb
