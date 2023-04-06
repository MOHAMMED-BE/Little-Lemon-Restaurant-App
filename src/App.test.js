import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Reservations'



// Test 1: Test for some static text being rendered in the BookingForm component

test('Renders the BookingForm label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByLabelText(/Full Name/);
  expect(labelElement).toBeInTheDocument();
});



// Test 2 : test for the initializeTimes function to validate that it returns the correct expected value.

describe('initializeTimes', () => {
  test('returns the correct array of time slots for a given time range', () => {
    const startTime = '17:00';
    const endTime = '22:00';
    const expectedOutput = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const actualOutput = initializeTimes(startTime, endTime);
    expect(actualOutput).toEqual(expectedOutput);
  });
});



// Test 3 :  test for the updateTimes function to validate that it returns the same value that is provided in the state.

test("updateTimes returns the same value as provided in state", () => {
  const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const date = new Date();
  const updatedTimes = updateTimes(date, state);
  expect(updatedTimes).toEqual(state);
});