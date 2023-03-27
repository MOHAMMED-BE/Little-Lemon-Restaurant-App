import React, { useState } from 'react'
import image from '../assets/images/greek-salad.jpg'
import Occasions from '../data/Occasions';

const Reservations = () => {
  const availableTimes  = [
    {houre : `17:00`},
    {houre : '18:00'},
    {houre : '19:00'},
    {houre : '20:00'},
    {houre : '21:00'},
    {houre : '22:00'},
  ]
  const todayDate = new Date();
  // const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const today = todayDate.toLocaleDateString('en-CA');
  const timeNow = todayDate.toLocaleTimeString('en-CA', { hour12: false, hour: 'numeric', minute: 'numeric' });

  const [firstnName, setFirstnName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(timeNow);
  const [numberGuests, setNumberGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(firstnName, lastName, date, time, numberGuests, occasion);
  }

  return (
    <div className="reservations">
      <div className="overlay">
        <div className='mt-5 d-flex justify-content-center align-items-center'>
          <div className="card reservations-card ">
            <div className="container">
              <img src={image} className="card-img-top reserve-image mt-2" alt="restaurant" />
            </div>
            <div className="card-body mt-3 d-flex justify-content-center align-items-center">
              <form action="" onSubmit={formSubmit}>
                <div className="container">
                  <div className="row">

                    <div className="col-md-12">
                      <label htmlFor="" className="form-label">First Name</label>
                      <input className='form-control mb-3 p-2' type="text" required value={firstnName} onChange={(e) => setFirstnName(e.target.value)} name="firstName" id="" placeholder='First Name' />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="" className="form-label">Last Name</label>
                      <input className='form-control mb-3 p-2' type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" id="" placeholder='Last Name' />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="" className="form-label">Choose date</label>
                      <input className='form-control mb-3 p-2' type="date" value={date} onChange={(e) => setDate(e.target.value)} name="date" id="" />
                    </div>
                    <div className="col-6">
                      <label htmlFor="" className="form-label">Choose time</label>
                      <select name="time" value={time} className='form-control' id="" onChange={(e) => setTime(e.target.value)}>
                        <option value="" disabled>Choose time</option>
                        {
                          availableTimes.map((item) => {
                            return <option key={item.houre} value={item.houre}>{item.houre}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="" className="form-label">Number of guests</label>
                      <input className='form-control mb-3 p-2' type="text" required value={numberGuests} onChange={(e) => setNumberGuests(e.target.value)} name="numberOfGuests" id="" />
                    </div>

                    <div className="col-6">
                      <label htmlFor="" className="form-label">Occasion</label>
                      <select name="occasion" value={occasion} className='form-control' id="" onChange={(e) => setOccasion(e.target.value)}>
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
                  <button type="submit" className='btn py-2 confirm-btn'>Reserve Table</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservations
