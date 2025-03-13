import React, { useState, useEffect } from 'react';
import axiosInstance from '../Auth/AxiosInstance'; // Import the Axios instance
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function SeeReservation() {
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [filteredReservations, setFilteredReservations] = useState([]);

  useEffect(() => {
    fetchAllReservations();
    setDate(getTomorrowDate()); // Set default value for date
  }, []);

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 7);
    return maxDate.toISOString().split('T')[0];
  };

  const fetchAllReservations = async () => {
    try {
      const response = await axiosInstance.get('/manageTable/getAllReservations');
      setReservations(response.data);
      console.log('All Reservations:', response.data);
    } catch (error) {
      setMessage('Failed to fetch reservations. Please try again.');
    }
  };

  const handleFilter = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    
    const filtered = reservations.filter(reservation => {
      const reservationTime = reservation.reservationTime.substring(0, 5); // Trim seconds
      return reservation.reservationDate === date && reservationTime === time;
    });

    console.log('Filtered Reservations:', filtered);
    setFilteredReservations(filtered);
  };

  return (
    <div className="container mt-5">
      <h1>See Reservations</h1>
      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleFilter} className="mb-4">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <label className="form-label">Select Date</label>
            <input
              type="date"
              className="form-control text-center"
              value={date}
              min={getTomorrowDate()}
              max={getMaxDate()}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2 mb-3">
            <label className="form-label">Time</label>
            <select className="form-control text-center" value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="">Select Time</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-100">Filter Reservations</button>
          </div>
        </div>
      </form>

      <div className="row">
        {(filteredReservations.length ? filteredReservations : reservations).map((reservation) => (
          <div className="col-md-4 mb-4" key={reservation.reservationId}>
            <div className="card border-primary shadow">
              <div className="card-body">
                <h5 className="card-title">Reservation ID: {reservation.reservationId}</h5>
                <p className="card-text">Customer ID: {reservation.customerId}</p>
                <p className="card-text">Table ID: {reservation.tableId}</p>
                <p className="card-text">Date: {reservation.reservationDate}</p>
                <p className="card-text">Time: {reservation.reservationTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeeReservation;
