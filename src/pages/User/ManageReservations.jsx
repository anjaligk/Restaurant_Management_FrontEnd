import React, { useState, useEffect } from 'react';
import axiosInstance from '../Auth/AxiosInstance'; // Import the Axios instance

function ManageReservations() {
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUserReservations();
  }, []);

  const fetchUserReservations = async () => {
    const userId = localStorage.getItem('userId');
    try {
      const response = await axiosInstance.get(`/reservation/getByCustomerId/${userId}`);
      setReservations(response.data);
      console.log('User Reservations:', response.data);
    } catch (error) {
      setMessage('Failed to fetch reservations. Please try again.');
      console.error('Error fetching reservations:', error);
    }
  };

  const handleCancelReservation = async (reservationId) => {
    try {
      const response = await axiosInstance.delete(`/reservation/cancel/${reservationId}`);
      if (response.status === 200) {
        setMessage('Reservation canceled successfully.');
        fetchUserReservations(); // Refresh reservations list
      } else {
        setMessage('Failed to cancel reservation. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Error canceling reservation:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Manage Reservations</h1>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="row">
        {reservations.map((reservation) => (
          <div className="col-md-4 mb-4" key={reservation.reservationId}>
            <div className="card border-primary shadow">
              <div className="card-body">
                <h5 className="card-title">Reservation ID: {reservation.reservationId}</h5>
                <p className="card-text">Table ID: {reservation.tableId}</p>
                <p className="card-text">Date: {reservation.reservationDate}</p>
                <p className="card-text">Time: {reservation.reservationTime}</p>
                <p className="card-text">Customer ID: {reservation.customerId}</p>
                <button className="btn btn-danger" onClick={() => handleCancelReservation(reservation.reservationId)}>
                  Cancel Reservation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageReservations;
