import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalDetail } from "../components/animal/AnimalDetails.js"
import { AnimalForm } from '../components/animal/AnimalForm.js'
import { AnimalList } from '../components/animal/AnimalList'
import { EmployeeForm } from '../components/Employee/EmployeeForm'
import { EmployeeList } from '../components/Employee/EmployeeList.js'
import { LocationDetail } from "../components/Location/LocationDetail.js"
import { LocationList } from '../components/Location/LocationList.js'
import { LocationForm } from '../components/Location/LocationForm'
import { CustomerList } from '../components/Customer/CustomerList.js'
import { CustomerForm } from '../components/Customer/CustomerForm'
import { OwnerList } from '../components/Owner/OwnerList.js'




export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                    <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/owners" element={<OwnerList />} />


                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/customers" element={<CustomerList />} />
                    <Route path="/customers/create" element={<CustomerForm />} /> {/* Renders a new customer form.*/}
                
                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/employees/create" element={<EmployeeForm />} /> {/*Renders a form for new employees. */}

                
                {/* Render the animal list when http://localhost:3000/animals */}                  
                    <Route path="/animals" element={<AnimalList />} />
                    <Route path="/animals/create" element={<AnimalForm />} /> {/*Renders a form for animals. */}
                    <Route path="/animals/:animalId" element={<AnimalDetail />} /> {/* Make sure you add the `exact` attribute here */} 

                        {/*
                            This is a new route to handle a URL with the following pattern:
                            http://localhost:3000/animals/1

                            It will not handle the following URL because the `(\d+)`
                            matches only numbers after the final slash in the URL
                            http://localhost:3000/animals/jack
                            */}


                {/* Render the location list when http://localhost:3000/locations */}
                    <Route path="/locations" element={<LocationList />} />
                    <Route path="/locations/:locationId" element={<LocationDetail />} /> {/* Make sure you add the `exact` attribute here */}
                    <Route path="/locations/create" element={<LocationForm />} />  {/* Our shiny new route. */}

                        {/* 
                            This is a new route to handle a URL with the following pattern:
                            http://localhost:3000/animals/1

                            It will not handle the following URL because the `(\d+)`
                            matches only numbers after the final slash in the URL
                            http://localhost:3000/animals/jack
                        */}

            </Routes>
        </>
    )
}
