import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Auth/AxiosInstance'; // Import the Axios instance

function AddTables() {
  const [capacity, setCapacity] = useState(''); // State to store table capacity
  const [message, setMessage] = useState(''); // For success/error messages
  const navigate = useNavigate();

  const isLocalStorageEmpty = () => {
    return localStorage.length === 0;
  };

  useEffect(() => {
    if (isLocalStorageEmpty()) {
      alert("Please login to do any operations");
      navigate("/login"); // Redirect to LoginPage
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Example POST request to the backend API
    try {
      const response = await axiosInstance.post('/manageTable/add', 
        { capacity }
      );

      if (response.status === 200) {
        setMessage('Table added successfully!');
        setCapacity(''); // Clear the input field
      } else {
        setMessage('Failed to add table. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="capacity" className="form-label">Enter the Table with number of seats:</label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Enter table capacity"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Table</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
}

export default AddTables;
