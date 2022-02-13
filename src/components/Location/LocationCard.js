import React from "react"
import "./LocationCard.css"

export const LocationCard = ({ location }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/dog.svg'} alt="Locations" />
          </picture>
          <h3>Name: <span className="card-locname">
            {location.name}
          </span></h3>
          <p>Address: {location.address}</p>
          <p>Phone: {location.phone}</p>
        </div>
      </div>
    );
}