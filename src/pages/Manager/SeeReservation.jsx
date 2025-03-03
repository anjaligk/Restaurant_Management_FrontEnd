import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    const token = localStorage.getItem('userToken');
    try {
      const response = await axios.get('http://localhost:8765/manageTable/getAllReservations', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setReservations(response.data);
      console.log('All Reservations:', response.data);
    } catch (error) {
      setMessage('Failed to fetch reservations. Please try again.');
    }
  };

  const handleFilter = async () => {
    const token = localStorage.getItem('userToken');
   // console.log('Filter Params:', { date: date, time });
    try {
      const response = await axios.get(`http://localhost:8765/manageTable/getReservationByDateAndTime?date=${date}&time=${time}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setFilteredReservations(response.data);
      console.log('Filtered Reservations:', response.data);
      console.log(date)
    } catch (error) {
      setMessage('Failed to fetch filtered reservations. Please try again.');
      console.error('Filter Error:', error.response);
      console.log(date)
      if (error.response) {
        console.error('Error Data:', error.response.data);
      }
    }
  };


  return (
    <div className="container mt-5">
      {message && <div className="mt-3 alert alert-info">{message}</div>}

      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {(filteredReservations.length ? filteredReservations : reservations).map((reservation) => (
              <div className="col-md-12 mb-4" key={reservation.reservationId}>
                <div className="card border-primary shadow">
                  <div className="card-body">
                    <h5 className="card-title">Reservation ID: {reservation.reservationId}</h5>
                    <p className="card-text">Table ID: {reservation.tableId}</p>
                    <p className="card-text">Date: {reservation.reservationDate}</p>
                    <p className="card-text">Time: {reservation.reservationTime}</p>
                    <p className="card-text">Customer ID: {reservation.customerId}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-secondary shadow">
            <div className="card-body">
              <h4 className="card-title">Filter Reservations</h4>
              <div className="mb-4">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  min={getTomorrowDate()}
                  max={getMaxDate()}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Time</label>
                <select className="form-control" value={time} onChange={(e) => setTime(e.target.value)} required>
                  <option value="">Select Time</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </select>
              </div>
              <button className="btn btn-primary w-100" onClick={handleFilter}>Filter Reservations</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeReservation;
