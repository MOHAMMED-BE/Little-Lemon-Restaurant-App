import React, { useEffect } from 'react';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import image from '../assets/images/login-img-3.jpg';

const Register = () => {

  const ariaLabel = 'Register';
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/');
    }
  }, [navigate]);

  const validationSchema = yup.object({
    fullname: yup.string().required("Please enter your Full Name"),
    email: yup.string().email('Invalid email').required('Please enter an email'),
    password: yup.string().min(5, 'Must be at least 5 characters').max(20, 'Must be at most 20 characters').required('Please enter a password'),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const result = await Swal.fire({
        title: 'You are successfully logged in',
        icon: 'success',
        confirmButtonText: 'Close',
      });

      if (result.isConfirmed) {
        localStorage.setItem('user-info', JSON.stringify(values));
        navigate('/');
      }
      else {
        console.log(false);
      }
    },
  });

  const {
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  return (
    <div className="reservations position-absolute">
      <div className="overlay">
        <div className="mt-5 d-flex justify-content-center">
          <div className="card reservations-card">
            <div className="container d-flex justify-content-center align-items-center">
              <img src={image} className="card-img-top login-img mt-2" alt="restaurant" />
            </div>
            <div className="card-body mt-3 d-flex justify-content-center align-items-center">
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <div className="row">

                    <div className="col-md-12">
                      <label htmlFor="" className="form-label">
                        Full Name
                      </label>

                      <input
                        type="text"
                        id="fullname"
                        required
                        name="fullname"
                        placeholder="Full Name"
                        className={
                          touched.fullname && errors.fullname
                            ? "form-control is-invalid"
                            : "form-control mb-2"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullname}
                      />
                      {touched.fullname && errors.fullname ? (
                        <div className="invalid-feedback">{errors.fullname}</div>
                      ) : null}
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        name="email"
                        placeholder="Email"
                        className={
                          touched.email && errors.email
                            ? "form-control is-invalid"
                            : "form-control mb-2"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {touched.email && errors.email ? (
                        <div className="invalid-feedback">{errors.email}</div>
                      ) : null}
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        name="password"
                        id=""
                        placeholder="Password"
                        className={
                          touched.password && errors.password
                            ? "form-control is-invalid"
                            : "form-control mb-2"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {touched.password && errors.password ? (
                        <div className="invalid-feedback">{errors.password}</div>
                      ) : null}
                    </div>

                  </div>
                  <div className="col-md-12  mt-2">
                    <p className="pb-lg-2" style={{ color: '#393f81' }}>Do you have an account? <Link className='nav-link d-inline text-primary' to='/login'>Login here</Link></p>
                  </div>
                </div>

                <div className="row mx-5 d-flex justify-content-center align-items-center">
                  <Button className='py-2 confirm-btn' ariaLabel={ariaLabel} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register