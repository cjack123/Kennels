import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addLocation } from '../../modules/LocationManager';
import './LocationForm.css'

export const LocationForm = () => {
	// State will contain both location data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [location, setLocation] = useState({
		name: "",
        address: "",
        phone: "",
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
		const newLocation = { ...location }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Location is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newLocation[event.target.id] = selectedVal
		// update state
		setLocation(newLocation)
	}


	const handleClickSaveLocation = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

			//invoke addLocation passing Location as an argument.
			//once complete, change the url and display the Location list
			addLocation(location)
				.then(() => navigate("/locations"))
		
	}

	return (
		<form className="locationForm">
			<h2 className="locationForm__title">New Location</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Location name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Nashville Kennel West" value={location.name} />
				</div>
			    </fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Location address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1234 Elmo st" value={location.address} />
				</div>
			    </fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="phone">Location phone:</label>
					<input type="text" id="phone" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="615-555-0002" value={location.phone} />
				</div>
			    </fieldset>

			<button className="btn btn-primary"
				onClick={handleClickSaveLocation}>
				Save Location
          </button>
		</form>
	)
};
