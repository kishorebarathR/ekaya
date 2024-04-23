import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const TakshaviPage = () => {
    return (
        <>
            <Container>
                <p className='justify-content-center mx-4 mt-5 display-6'>Tranquil Living in </p>
                <p className='justify-content-center mx-4 display-6'> Frazer Town’s Spencer Road</p>
                <p className=' fs-5 mx-4 mt-3'>Ekaya Spaces proudly unveils Takshavi, a boutique residential enclave nestled in the heart of Frazer Town’s Spencer Road. With a modest yet sophisticated approach, Takshavi offers seven meticulously crafted 3-bedroom apartments, each designed to provide residents with a serene haven amidst the urban landscape.</p>
                <p className=' fs-5 mx-4 mt-3'>Positioned within the tranquil surroundings of Frazer Town, Takshavi enjoys a coveted location that grants easy access to nearby parks, esteemed educational institutions, and essential amenities. Its integration into the neighborhood fabric reflects a commitment to fostering a sense of community and belonging.</p>

            </Container>

            <Container>
                <p className='fs-3 mx-3'>Our homes are designed to create a harmonious flow between interior luxury and the beauty of the outdoors.</p>
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
                                    <Image src="/images/Mask Group 86.jpg" class=" w-100" alt="..." />
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
            <p className=' fs-5 mx-4 mt-3'>In a practical gesture, Takshavi ensures convenience for its residents by providing two dedicated parking spots per apartment, alleviating the common urban concern of parking scarcity. Additionally, the project incorporates essential features such as 100% generator backup and rainwater harvesting systems, prioritizing uninterrupted living and environmental consciousness without ostentation.</p>
            <p className=' fs-5 mx-4 mt-3'>Takshavi’s architectural design embodies a harmonious blend of contemporary elegance and sustainable principles. Through thoughtful planning, each apartment maximizes space and natural light, creating a welcoming ambiance conducive to relaxation and rejuvenation.</p>
            <p className=' fs-5 mx-4 mt-3'>With just seven 3-bedroom apartments, Takshavi offers a sense of exclusivity and intimacy, allowing residents to enjoy a peaceful retreat from the bustling city life. Whether unwinding in the comfort of their homes or exploring the nearby amenities, residents are invited to experience a lifestyle that seamlessly integrates modern comforts with understated luxury.</p>
            <p className=' fs-5 mx-4 mt-3'>In summary, Takshavi by Ekaya Spaces presents a modest yet refined living experience in Frazer Town’s Spencer Road. With its limited collection of 3-bedroom apartments, practical amenities, and commitment to sustainability, Takshavi invites residents to embrace a tranquil urban lifestyle without extravagance. Welcome to the essence of serene living at Takshavi by Ekaya Spaces.</p>
         
            </Container>

        </>
    )
}

export default TakshaviPage
