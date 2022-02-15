import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getEmployeesById, updateEmployee} from "../../modules/EmployeeManager"
import "./EmployeeForm.css"

export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({ name: "", address: "", workplace: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {employeeId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      workplace: employee.workplace
    };

  updateEmployee(editedEmployee)
    .then(() => navigate("/employees")
    )
  }

  useEffect(() => {
    getEmployeesById(employeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="workplace"
              value={employee.workplace}
            />
            <label htmlFor="workplace">Workplace</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}