import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/greek-salad.jpg';
import Occasions from '../data/Occasions';
import * as yup from "yup";
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const BookingForm = (props) => {

  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const ariaLabel = 'Reserve Table';
  const MySwal = withReactContent(Swal);

  const occasionOptions = Occasions.map((option) => option.name);

  const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    numberGuests: yup.number().min(1, 'Must be at least 1 guest').max(10, 'Must be at most 10 guests').required('Number Of Guests is required'),
    occasion: yup.string().oneOf(occasionOptions, "Invalid option").required("Invalid option"),
  });

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    const date = new Date(selectedDate);
    const filteredTimes = props.availableTimes.filter((t) => t !== time);

    props.updateTimes(date);

    setFinalTime(filteredTimes.map((times) => <option key={times}>{times}</option>));
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      numberGuests: "",
      occasion: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = { ...values, date, time };

      props.submitForm(data);
      if (props.submitForm) {
        const result = await MySwal.fire({
          title: 'You have successfully confirmed your reservation',
          text: "You can't edit or retract your booking anymore",
          icon: 'success',
          confirmButtonText: 'Close',
        });

        if (result.isConfirmed) {
          console.log(true);
          console.log(data);
          navigate('/');
        }
        else {
          console.log(false);
        }
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
            <div className="container">
              <img src={image} className="card-img-top reserve-image mt-2" alt="restaurant" />
            </div>
            <div className="card-body mt-3 d-flex justify-content-center align-items-center">
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="" className="form-label">
                        First Name
                      </label>

                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className={
                          touched.firstName && errors.firstName
                            ? "form-control is-invalid"
                            : "form-control mb-2"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      {touched.firstName && errors.firstName ? (
                        <div className="invalid-feedback">{errors.firstName}</div>
                      ) : null}
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="" className="form-label">
                        Last Name
                      </label>
                      <input
                        className={`
                          ${touched.lastName && errors.lastName
                            ? 'form-control is-invalid'
                            : 'form-control'
                          }
                        `}
                        type="text"
                        required
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="lastName"
                        id=""
                        placeholder="Last Name"
                      />
                      {touched.lastName && errors.lastName ? (
                        <div className="invalid-feedback">{errors.lastName}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-6">
                      <label htmlFor="" className="form-label">
                        Choose date
                      </label>
                      <input
                        className="form-control mb-2 p-2"
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        name="date"
                        id=""
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="" className="form-label">
                        Choose time
                      </label>
                      <select
                        className="form-control mb-2 p-2"
                        id="time"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Choose time
                        </option>
                        {finalTime}
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="" className="form-label">
                        Number of guests
                      </label>
                      <input
                        type="number"
                        id="numberGuests"
                        name="numberGuests"
                        placeholder="Number Guests"
                        className={
                          touched.numberGuests && errors.numberGuests
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.numberGuests}
                      />
                      {touched.numberGuests && errors.numberGuests ? (
                        <div className="invalid-feedback">{errors.numberGuests}</div>
                      ) : null}
                    </div>

                    <div className="col-6">
                      <label htmlFor="" className="form-label">Occasion</label>
                      <select
                        className={
                          touched.occasion && errors.occasion
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        name="occasion"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.occasion}>

                        <option value="" disabled>Select an Occasion</option>
                        {occasionOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {touched.occasion && errors.occasion ? (
                        <div className="invalid-feedback">{errors.occasion}</div>
                      ) : null}
                    </div>
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

export default BookingForm