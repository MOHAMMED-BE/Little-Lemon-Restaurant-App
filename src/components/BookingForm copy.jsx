import React, { useState } from 'react'
import image from '../assets/images/greek-salad.jpg'
import Occasions from '../data/Occasions';

const BookingForm = ({
  selectedDate,
  setSelectedDate,
  availableTimes,
  dispatch,

}) => {

  const todayDate = new Date();
  // const today = todayDate.toLocaleDateString('en-CA');
  const timeNow = todayDate.toLocaleTimeString('en-CA', { hour12: false, hour: 'numeric', minute: 'numeric' });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState();
  const [time, setTime] = useState(timeNow);
  const [numberGuests, setNumberGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const ariaLabel = 'Reserve Table';


  function handleDateChange(e) {
    setSelectedDate(e.target.value);
    dispatch({
      type: "UPDATE_TIMES",
      payload: { date: e.target.value, time }
    });
  }


  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('time', time);
  formData.append('day', day);

  const submitAPI = function (formData) {
    return true;
  };

  return (
    <div className="reservations mt-5 position-absolute">
      <div className="overlay">
        <div className='mt-5 d-flex justify-content-center'>
          <div className="card reservations-card ">
            <div className="container">
              <img src={image} className="card-img-top reserve-image mt-2" alt="restaurant" />
            </div>
            <div className="card-body mt-3 d-flex justify-content-center align-items-center">
              <form onSubmit={submitAPI}>
                <div className="container">
                  <div className="row">

                    <div className="col-md-12">
                      <label htmlFor="" className="form-label">First Name</label>
                      <input className='form-control mb-3 p-2' type="text" required value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} name="firstName" id="" placeholder='First Name' />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="" className="form-label">Last Name</label>
                      <input className='form-control mb-3 p-2' type="text" required value={lastName}
                        onChange={(e) => setLastName(e.target.value)} name="lastName" id="" placeholder='Last Name' />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="" className="form-label">Choose date</label>
                      <input className='form-control mb-3 p-2' type="date"
                        value={selectedDate}
                        onChange={(e) => {
                          handleDateChange();
                          setDay(e.target.value);
                        }}

                        name="date" id="" />
                    </div>
                    <div className="col-6">
                      <label htmlFor="" className="form-label">Choose time</label>
                      <select name="time" value={time} className='form-control' id=""
                        onChange={(e) => {
                          setTime(e.target.value);
                        }}>
                        <option value="" disabled>Choose time</option>
                        {
                          availableTimes.map((item) => {
                            return <option key={item.time} value={item.time}>{item.time}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="" className="form-label">Number of guests</label>
                      <input className='form-control mb-3 p-2' type="text" required value={numberGuests}
                        onChange={(e) => setNumberGuests(e.target.value)} name="numberOfGuests" id="" />
                    </div>

                    <div className="col-6">
                      <label htmlFor="" className="form-label">Occasion</label>
                      <select name="occasion" value={occasion} className='form-control' id=""
                        onChange={(e) => setOccasion(e.target.value)}>
                        <option value="" disabled>Select an Occasion</option>
                        {
                          Occasions.map((option) => {
                            return <option key={option.name} value={option.name}>{option.name}</option>

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
