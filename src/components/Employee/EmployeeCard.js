import React from "react"
import { Link } from "react-router-dom";
import "./EmployeeCard.css"


export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">
            {employee.name}</span>
            </h3>
          <p>Workplace: {employee.location}</p>
          <Link to={`/employees/${employee.id}/edit`}>
            <button>Edit</button>
            </Link>
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate</button>
        </div>
      </div>
    );
}


