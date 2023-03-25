import React from 'react';
import bgImage from "../assets/images/restauranfood.jpg"
import logo from "../assets/svg/Logo.svg"
import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';


function Register() {
    return (
        <>
            <MDBContainer className="my-5">

                <MDBCard>
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src={bgImage} alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>

                                <div className='d-flex flex-row mt-2'>
                                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                    <img src={logo} alt="logo" />
                                </div>

                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Create an Acount account</h5>

                                <MDBInput className='mb-4' label='Full Name' id='formControl-name' type='fullname' size="lg" />
                                <MDBInput className='mb-4' label='Email address' id='formControl-email' type='email' size="lg" />
                                <MDBInput wrapperClass='mb-4' label='Password' id='formControl-password' type='password' size="lg" />

                                <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Register</MDBBtn>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Do you have an account? <Link className='nav-link d-inline text-primary' to='/login'>Login here</Link></p>

                                <div className='d-flex flex-row justify-content-start'>
                                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                </div>

                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>
                </MDBCard>

            </MDBContainer>
        </>
    );
}

export default Register;