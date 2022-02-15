import React from "react"
import { Link } from "react-router-dom";
import "./CustomerCard.css"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src="" alt="" />
          </picture>
          <h3>Name: <span className="card-custname">
            {customer.name}
              </span></h3>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <Link to={`/customers/${customer.id}/edit`}>
              <button>Edit</button>
              </Link>
            <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Terminate Membership</button>
          </div>
        </div>
    );
}
