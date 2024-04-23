import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const EllenPage = () => {
    return (
        <>
            <Container>
                <p className='justify-content-center mx-4 mt-5 display-6'>Truly a home for your future!</p>
                <p className=' fs-5 mx-4 mt-3'>Ekaya brings you its prestigious project, ELLEN - a premium three-storey apartment block, with a total of 11 spacious modern homes, abound with new age luxuries.</p>
                <p className=' fs-5 mx-4 mt-3'>Every floor houses just two, 2 bedroom and one, 3 bedroom home. Each unit has an open kitchen with a spacious utility area, an exclusive dining area, and a spacious balcony. All Vaastu-compliant homes are thoughtfully designed, keeping in mind the most primary need of the day - space and privacy. The residences are beautifully weaved into the very fiber of ELLEN’s design structure.</p>
                <p className=' fs-5 mx-4 mt-3'>At ELLEN compromise was never an option. Only the best of everything has been utilized, right from the building material, to its 24 hrs - power back up,the gym, to the maneuver-friendly stilt ( ground level ) and basement parking , to the finish with marble and wooden flooring.</p>
            </Container>
            <Container>
                <Row className='d-flex flex-row '>
                    <Col className='fs-5  col-lg-2 py-2 ms-3' style={{ backgroundColor: '#DFF3F4' }} sm={12} lg={2}>
                        Project Gallery
                    </Col>

                    <Col lg={10} className='mx-1'>


                        <div id="slides" className="carousel slide" data-bs-ride="carousel">


                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#slides" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#slides" data-bs-slide-to="1"></button>

                            </div>



                            <div className="carousel-inner">

                                <div className="carousel-item active" data-bs-interval="2000">
                                    <Image src="/images/Mask Group 98.jpg" class=" w-100" alt="..." />

                                </div>

                                <div className="carousel-item" data-bs-interval="2000">
                                    <Image src="/images/Mask Group 35.jpg" className=" w-100 h-100" alt="..." />
                                </div>


                                <button className="carousel-control-prev" type="button" data-bs-target="#slides" data-bs-slide="prev">

                                    <span className="carousel-control-prev-icon bg-dark rounded-5"></span>

                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#slides" data-bs-slide="next">

                                    <span className="carousel-control-next-icon bg-dark rounded-5"></span>
                                </button>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <p className='justify-content-center mx-4 mt-5 display-6'>LOCATION</p>
                <p className=' fs-5 mx-4 mt-3'>With in a few minutes drive of Bengaluru’s hottest landmark destinations – UB city, Bangalore club, Ritz Carlton hotel, JW Marriot, Lalbagh Botanical Gardens, Cubbon park and many more, Ekaya’s ELLEN is just off Langford Main Road, cocooned in the most sought after, premium residential neighbourhood of Richmond town in central bangalore.</p>
                <p className=' fs-5 mx-4 mt-3'>It is strategically situated in the Central Business District (CBD) and just about 5 minutes from the upcoming metro station at Vellara junction.</p>
            </Container>

        </>
    )
}

export default EllenPage
