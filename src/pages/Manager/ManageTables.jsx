import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import axiosInstance from '../Auth/AxiosInstance'; // Import the Axios instance

function ManageTables() {
  const [tables, setTables] = useState([]);
  const [message, setMessage] = useState('');
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState({});

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const response = await axiosInstance.get('/manageTable/getall');
      setTables(response.data);
    } catch (error) {
      setMessage('Failed to fetch tables. Please try again.');
    }
  };

  const handleDelete = async (tableId) => {
    try {
      await axiosInstance.delete(`/manageTable/delete/${tableId}`);
      fetchTables(); // Refresh the table list
      setMessage('Table deleted successfully.');
    } catch (error) {
      setMessage('Failed to delete table. Please try again.');
    }
  };

  const handleUpdateClick = (table) => {
    setSelectedTable(table);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateChange = (e) => {
    setSelectedTable({ ...selectedTable, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put('/manageTable/change', selectedTable);
      if (response.status === 200) {
        setMessage('Table updated successfully!');
        setIsUpdateModalOpen(false);
        fetchTables(); // Refresh the table list
      } else {
        setMessage('Failed to update table. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      {message && <div className="mt-3 alert alert-info">{message}</div>}
      <div className="row">
        {tables.map((table) => (
          <div className="col-md-4 mb-4" key={table.tableId}>
            <div className="card border-primary shadow">
              <div className="card-body">
                <h5 className="card-title">Table ID: {table.tableId}</h5>
                <p className="card-text">Capacity: {table.capacity}</p>
                <button className="btn btn-outline-warning" onClick={() => handleUpdateClick(table)}>Update</button>
                <button className="btn btn-outline-danger ms-2" onClick={() => handleDelete(table.tableId)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {isUpdateModalOpen && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Table</h5>
                <button type="button" className="btn-close" onClick={() => setIsUpdateModalOpen(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-3">
                    <label htmlFor="tableId" className="form-label">Table ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tableId"
                      name="tableId"
                      value={selectedTable.tableId}
                      onChange={handleUpdateChange}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="capacity"
                      name="capacity"
                      value={selectedTable.capacity}
                      onChange={handleUpdateChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Update Table</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageTables;
