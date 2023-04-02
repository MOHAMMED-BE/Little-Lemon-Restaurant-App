import React , {useReducer,useState} from 'react'
import BookingForm from './BookingForm';
import { fetchAPI } from '../BookingsAPI';


const initialState = [
    { time: "17:00", isReserved: false },
    { time: "18:00", isReserved: false },
    { time: "19:00", isReserved: false },
    { time: "20:00", isReserved: false },
    { time: "21:00", isReserved: false },
    { time: "22:00", isReserved: false },
  ];
  
  const updateTimes = (state, { date, time }) => {
    return state.map(item => {
      if (item.time === time) {
        return {
          ...item,
          isReserved: true
        };
      }
      return item;
    }).filter(item => item.isReserved === false);
  };
  
  const availableTimeReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return updateTimes(state, action.payload);
      default:
        return state;
    }
  };
  
  const initializeTimes = () => {
    return initialState;
  };
  

const Reservations = () => {
    function updateTimes(date) {
        return fetchAPI(date);
      }
    
      const output = fetchAPI(new Date());
    
      const [availableTimes, dispatch] = useReducer(updateTimes, output);
      
      const [selectedDate, setSelectedDate] = useState("");
    //   const [availableTimes, dispatch] = useReducer(
    //     availableTimeReducer,
    //     initializeTimes().filter(time => !time.isReserved)
    //   );
    
      return (

        
        <>
          <BookingForm 
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          availableTimes={availableTimes}
          dispatch={dispatch}
          updateTimes={dispatch} />
        </>
      );
    }

export default Reservations

// selectedDate={selectedDate}
//                 setSelectedDate={setSelectedDate}
//                 availableTimes={availableTimes}
//                 dispatch={dispatch}
