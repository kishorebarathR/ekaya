import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectRegistrationForm = () => {
  return (
    <div className='mx-5 p-5 mt-5' style={{ backgroundColor: '#F1F4F5' }}>
      <Container>
        <p className=' mt-5 display-6'>Get in touch</p>
        <p className=' fs-5'>*Required fields</p>

        <Row>
          <Col md={6}>
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name*</label>
                <input type="text" className="form-control" id="firstName" name="firstName" required />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name*</label>
                <input type="text" className="form-control" id="lastName" name="lastName" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email*</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>


            </form>
          </Col>

          <Col md={6}>
            <form >
              <div className="mb-3 ">
                <label htmlFor="phone" className="form-label">Telephone*</label>
                <input type="tel" className="form-control" id="phone" name="phone" required />
              </div>
              <div className="mb-3">
                <label htmlFor="project" className="form-label">Choose Project:</label>
                <select className="form-select" id="project" name="project" required>
                  <option value="Project A">Project A</option>
                  <option value="Project B">Project B</option>
                  <option value="Project C">Project C</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="location" className="form-label">Your Location:</label>
                <input type="text" className="form-control" id="location" name="location" required />
              </div>
            </form>
          </Col>
        </Row>
       
        <Row>
          <Col>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="termsCheckbox" required />
              <label className="form-check-label" htmlFor="termsCheckbox">I declared that I have read,understood and accept the <a href="#" class="link-primary">Privacy Policy.</a></label>
            </div>
            <button type="submit" className="btn btn-primary p-1 px-5 py-2 rounded-0" style={{ backgroundColor: '#474848' }}>Submit</button>
          </Col>
        </Row>
      </Container>
      <div className='fs-4 text-center p-3 '>Call:91 9844032022 <Col className='vr ' style={{ width: '3px', height: '10px' }}></Col>Email:<a href="#" class="link-dark fs-4">Contact@ekaya</a></div>


    </div>
  );
};

export default ProjectRegistrationForm;
