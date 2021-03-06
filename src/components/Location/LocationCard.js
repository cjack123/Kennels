import React from "react"
import "./LocationCard.css"
import { Link } from "react-router-dom";


export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={''} alt="Locations" />
            </picture>
          <h3>Name: <span className="card-locname">
            {location.name}</span>
            </h3>
          <p>Address: {location.address}</p>
          <p>Phone: {location.phone}</p>
          <Link to={`/locations/${location.id}`}><button>Details</button></Link>
          <Link to={`/locations/${location.id}/edit`}><button>Edit</button></Link>
          <button type="button" onClick={() => handleDeleteLocation(location.id)}>Permanent Closure</button>
        </div>
      </div>
    );
}