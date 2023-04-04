import React, { useReducer } from 'react'
import BookingForm from './BookingForm';
import { fetchAPI,submitAPI } from '../BookingsAPI';

const Reservations = () => {

    function updateTimes(date) {
        return fetchAPI(date);
    }

    function submitForm(formData){
        return submitAPI(formData);
    }
    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={dispatch}
                submitForm={submitForm} />
        </>
    );
}

export default Reservations