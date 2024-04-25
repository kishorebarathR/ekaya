'use client'
// import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Button, Col, Image } from 'react-bootstrap';

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
                className='d-flex flex-column h-100vh position-relativess'
                style={{
                    // backgroundImage: isMobile ? url(${mobileBackgroundImage.url}) : url(${backgroundImage.url}), // Access the URL from the object
                    backgroundImage: `url(${backgroundImage.url})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100vh',
                }}
            >

                {/* <Image src={`url(${backgroundImage.url})`} alt='' fluid className='img-fluid w-100 h-100 '/> */}
                {/* <Image src={`${backgroundImage.url}`} alt='' fluid className='img-fluid w-100 h-100' /> */}

                <Col className="position-absolute end-0 bottom-0 ">
                    {/* <h1 className="fs-21 fw-bold">{bannerHeading}</h1> */}
                    <Button className="px-5 py-3 bg-white text-black border-0 rounded-0 w-100">
                        Contact Us
                    </Button>
                </Col>
            </div>
        </>
    )
}

export default BannerAllPageComponents