import React, { useState } from 'react';
import image from '../assets/images/greek-salad.jpg';
import Occasions from '../data/Occasions';
import { submitAPI } from '../BookingsAPI';

const BookingForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberGuests, setNumberGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const ariaLabel = 'Reserve Table';

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    // Remove last selected time from availableTimes list
    const filteredTimes = props.availableTimes.filter((t) => t !== time);

    props.updateTimes(date);

    setFinalTime(filteredTimes.map((times) => <option key={times}>{times}</option>));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && date && time && numberGuests && occasion) {
      const formData = {
        firstName,
        lastName,
        date,
        time,
        numberGuests,
        occasion,
      };
      console.log(formData);
      submitAPI(formData);
      if (submitAPI) {
        console.log(true);
      }
      else {
        console.log(false);

      }
    }
  };

  return (
    <div className="reservations mt-5 position-absolute">
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
                        className="form-control mb-3 p-2"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        name="firstName"
                        id=""
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="" className="form-label">
                        Last Name
                      </label>
                      <input
                        className="form-control mb-3 p-2"
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        name="lastName"
                        id=""
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="" className="form-label">
                        Choose date
                      </label>
                      <input
                        className="form-control mb-3 p-2"
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        name="date"
                        id=""
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="" className="form-label">
                        Choose time
                      </label>
                      <select
                        className="form-control mb-3 p-2"
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

                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="" className="form-label">
                        Number of guests
                      </label>
                      <input
                        className='form-control mb-3 p-2'
                        type="text"
                        required
                        value={numberGuests}
                        onChange={(e) => setNumberGuests(e.target.value)}
                        name="numberOfGuests" id="" />
                    </div>

                    <div className="col-6">
                      <label htmlFor="" className="form-label">Occasion</label>
                      <select
                        name="occasion"
                        value={occasion}
                        className='form-control' id=""
                        onChange={(e) => setOccasion(e.target.value)}>

                        <option value="" disabled>Select an Occasion</option>
                        {
                          Occasions.map((option) => {
                            return <option
                              key={option.name}
                              value={option.name}>
                              {option.name}
                            </option>

                          })
                        }
                      </select>
                    </div>
                  </div>

                </div>
                <div className="row mx-5 d-flex justify-content-center align-items-center">
                  <button type="submit" className='btn py-2 confirm-btn' aria-label={ariaLabel}>{ariaLabel}</button>
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
