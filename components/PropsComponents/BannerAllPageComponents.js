'use client'
// import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';

const BannerAllPageComponents = ({backgroundImage}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setViewportWidth(window.innerWidth);
    //         setIsMobile(window.innerWidth <= 768);
    //     };

    //     // Check if window is available before adding event listener
    //     if (typeof window !== 'undefined') {
    //         handleResize(); // Call it initially to set the initial state
    //         window.addEventListener('resize', handleResize);

    //         return () => {
    //             window.removeEventListener('resize', handleResize);
    //         };
    //     }
    // }, []);


    return (
        <>
            <div
                className='d-flex flex-column h-auto '
                // style={{
                //     // backgroundImage: isMobile ? url(${mobileBackgroundImage.url}) : url(${backgroundImage.url}), // Access the URL from the object
                //     backgroundImage: `url(${backgroundImage.url})`,
                //     backgroundSize: 'cover',
                //     backgroundRepeat: 'no-repeat',
                //     width: '100%',
                //     minHeight: 'auto',
                // }}
            >

                {/* <Image src={`url(${backgroundImage.url})`} alt='' fluid className='img-fluid w-100 h-100 '/> */}
                <Image src={`${backgroundImage.url}`} alt='' fluid className='img-fluid w-100 h-100' />

                {/* <Col lg={7} className="pl-8 d-flex flex-column justify-content-start">
                    <h1 className="fs-21 fw-bold">{bannerHeading}</h1>
                </Col> */}
            </div>
        </>
    )
}

export default BannerAllPageComponents