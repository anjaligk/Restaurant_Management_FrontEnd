import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Auth/AxiosInstance'; // Import the Axios instance

function BookTable() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableTables, setAvailableTables] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.length === 0) {
      alert("Please login to do any operations");
      navigate("/login"); // Redirect to LoginPage
    }
  }, [navigate]);

  useEffect(() => {
    // Set default values for date and time
    setDate(getTomorrowDate());
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

  const fetchAvailableTables = async () => {
    try {
    
      const response = await axiosInstance.get(`/reservation/available-tables?date=${date}&time=${time}`);
      
      setAvailableTables(response.data);
      console.log('Available Tables:', response.data);
      console.log(date);
    } catch (error) {
      setMessage('Failed to fetch available tables. Please try again.');
      if (error.response) {
        console.error('Error Data:', error.response.data);
      }
    }
  };

  const handleBookTable = async (tableId) => {
    const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage
    console.log('Booking Table with userId:', userId); // Log the userId to debug
    try {
      const response = await axiosInstance.post('/reservation/book', {
        customerId: userId,
        tableId,
        reservationDate: date,
        reservationTime: time,
      });
      if (response.status === 200) {
        setMessage('Table booked successfully!');
        setAvailableTables([]); // Clear available tables after booking
      } else {
        setMessage('Failed to book table. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Book Table</h1>
      <div className="mb-4">
        <label className="form-label">Select Date</label>
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
        <label className="form-label">Select Time</label>
        <select className="form-control" value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="">Select Time</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
        </select>
      </div>
      <button className="btn btn-primary mb-4" onClick={fetchAvailableTables}>Show Available Tables</button>
      
      {message && <div className="alert alert-info">{message}</div>}

      <div className="row">
        {availableTables.map((table) => (
          <div className="col-md-4 mb-4" key={table.tableId}>
            <div className="card border-primary shadow">
              <div className="card-body">
                <h5 className="card-title">Table ID: {table.tableId}</h5>
                <p className="card-text">Capacity: {table.capacity}</p>
                <button className="btn btn-success" onClick={() => handleBookTable(table.tableId)}>Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookTable;
