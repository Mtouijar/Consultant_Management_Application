import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Administration Dashboard</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">CRUD Consultants</h5>
              <p className="card-text">Gérer les consultants : ajout, modification, suppression, recherche.</p>
              <button className="btn btn-primary" disabled>Accéder</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">CRUD Missions/Projects</h5>
              <p className="card-text">Gérer les missions et projets : ajout, modification, suppression, recherche.</p>
              <button className="btn btn-primary" disabled>Accéder</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Statistiques</h5>
              <p className="card-text">Voir les statistiques des consultants, missions et projets.</p>
              <button className="btn btn-primary" disabled>Voir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 