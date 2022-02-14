import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../modules/CustomerManager';
import { getAllLocations } from '../../modules/LocationManager';
import './CustomerForm.css'

export const CustomerForm = () => {
	// State will contain both Customer data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [customer, setCustomer] = useState({
		name: "",
		breed: "",
		locationId: 0,
		customerId: 0
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [locations, setLocations] = useState([]);
	const [customers, setCustomers] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newCustomer = { ...customer }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Customer is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newCustomer[event.target.id] = selectedVal
		// update state
		setCustomer(newCustomer)
	}

    useEffect(() => {
		//load location data and setState
        getAllLocations().then(setLocations)
	}, []);



	const handleClickSaveCustomer = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const locationId = customer.locationId

		if (locationId === 0) {
			window.alert("Please select a location")
		} else {
			//invoke addCustomer passing customer as an argument.
			//once complete, change the url and display the customer list
			addCustomer(customer)
				.then(() => navigate("/customers"))
		}
	}

	return (
		<form className="customerForm">
			<h2 className="customerForm__title">New Customer</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Customer name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Jo Wilson" value={customer.name} />
				</div>
			    </fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Customer address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="123 Hope Street" value={customer.address} />
				</div>
			    </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="phone">Customer phone:</label>
                    <input type="text" id="phone" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="615-555-5551" value={customer.phone} />
                </div>
                </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Customer email:</label>
                    <input type="text" id="email" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="mike@kennels.com" value={customer.email} />
                </div>
                </fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Choose location: </label>
					<select value={customer.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			    </fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save Customer
            </button>
		</form>
	)
};
