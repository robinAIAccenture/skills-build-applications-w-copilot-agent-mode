

import React, { useState } from 'react';
import './App.css';
import octofitLogo from '../public/octofitapp-small.png';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container py-4">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark mb-4">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo me-2" />
          OctoFit Tracker
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Teams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Leaderboard</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Heading */}
      <h1 className="display-4 mb-4 text-center">Welcome to OctoFit Tracker</h1>

      {/* Card Example */}
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Your Fitness Summary</h5>
              <p className="card-text">Track your activities, join teams, and climb the leaderboard!</p>
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Show Modal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Example */}
      <div className="row mb-4">
        <div className="col-md-8 offset-md-2">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Duration (min)</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026-03-24</td>
                <td>Running</td>
                <td>30</td>
                <td>300</td>
              </tr>
              <tr>
                <td>2026-03-23</td>
                <td>Cycling</td>
                <td>45</td>
                <td>400</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bootstrap Modal Example */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome!</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal example in OctoFit Tracker.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bootstrap Form Example */}
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <form className="card card-body shadow">
            <h5 className="mb-3">Log Activity</h5>
            <div className="mb-3">
              <label htmlFor="activity" className="form-label">Activity</label>
              <input type="text" className="form-control" id="activity" placeholder="e.g. Running" />
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Duration (min)</label>
              <input type="number" className="form-control" id="duration" placeholder="e.g. 30" />
            </div>
            <div className="mb-3">
              <label htmlFor="calories" className="form-label">Calories</label>
              <input type="number" className="form-control" id="calories" placeholder="e.g. 300" />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
