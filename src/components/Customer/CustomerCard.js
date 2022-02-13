import React from "react"
import "./CustomerCard.css"

export const CustomerCard = ({ customer }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src="" alt="" />
          </picture>
          <h3>Name: <span className="card-custname">
            {customer.name}
              </span></h3>
            <p>Address: {customer.address}</p>
          </div>
        </div>
    );
}