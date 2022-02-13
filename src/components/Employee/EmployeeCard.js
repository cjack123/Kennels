import React from "react"
import "./EmployeeCard.css"


export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={''} alt="employees" />
          </picture>
          <h3>Name: <span className="card-petname">
            {employee.name}
          </span></h3>
          <p>Workplace: {employee.workplace}</p>
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminated</button>
        </div>
      </div>
    );
}


