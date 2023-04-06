import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/online-booking-1.png';
import Occasions from '../data/Occasions';
import * as yup from "yup";
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const BookingForm = (props) => {

  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [initalTime, setinItalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );
  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );
  const [isTimeSelected, setIsTimeSelected] = useState(true);
  const ariaLabel = 'Reserve Table';
  const MySwal = withReactContent(Swal);
  const occasionOptions = Occasions.map((option) => option.name);

  const validationSchema = yup.object({
    fullname: yup.string().required("Please enter your Full Name"),
    numberGuests: yup.number().min(1, 'Must be at least 1 guest').max(10, 'Must be at most 10 guests').required('Number Of Guests is required'),
    occasion: yup.string().oneOf(occasionOptions, "Invalid option").required("Invalid option"),
  });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    const date = new Date(selectedDate);

    if (isTimeSelected) {
      setFinalTime(initalTime);
    } else {
      const filteredTimes = props.availableTimes.filter((t) => t !== time);
      setFinalTime(filteredTimes.map((times) => <option key={times}>{times}</option>));
    }

    props.updateTimes(date);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    setIsTimeSelected(!isTimeSelected);
  };

  console.log(isTimeSelected)

  const formik = useFormik({
    initialValues: {
      fullname: "",
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
                  <div className="row mb-2">
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
                  </div>

                  <div className="row mb-2">
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
                        required
                        disabled={!time}
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
                        onChange={handleTimeChange}
                        required
                      >
                        <option value="" disabled>
                          Choose time
                        </option>
                        {!isTimeSelected ? finalTime : initalTime}
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
                <div className="row mx-5 mt-4 d-flex justify-content-center align-items-center">
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