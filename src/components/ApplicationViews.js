import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from '../components/animal/AnimalList.js'
import { LocationList } from '../components/Location/LocationList.js'
import { CustomerList } from '../components/Customer/CustomerList.js'
import { EmployeeList } from '../components/Employee/EmployeeList.js'
import { OwnerList } from '../components/Owner/OwnerList.js'
import { AnimalDetail } from "../components/animal/AnimalDetails.js"
import { LocationDetail } from "../components/Location/LocationDetail.js"
import { AnimalForm } from '../components/animal/AnimalForm.js'
import { EmployeeForm } from '../components/Employee/EmployeeForm'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                    <Route exact path="/" element={<Home />} />

                {/* Render the location list when http://localhost:3000/locations */}
                {/* Make sure you add the `exact` attribute here */}
                    <Route path="/locations" element={<LocationList />} />
                    <Route path="/locations/:locationId" element={<LocationDetail />} />
                        {/* 
                            This is a new route to handle a URL with the following pattern:
                            http://localhost:3000/animals/1

                            It will not handle the following URL because the `(\d+)`
                            matches only numbers after the final slash in the URL
                            http://localhost:3000/animals/jack
                        */}

                {/* Render the animal list when http://localhost:3000/animals */} 
                {/* Make sure you add the `exact` attribute here */}                  
                    <Route path="/animals" element={<AnimalList />} />
                    <Route path="/animals/:animalId" element={<AnimalDetail />} />

                        {/*
                            This is a new route to handle a URL with the following pattern:
                            http://localhost:3000/animals/1

                            It will not handle the following URL because the `(\d+)`
                            matches only numbers after the final slash in the URL
                            http://localhost:3000/animals/jack
                            */}


                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/customers" element={<CustomerList />} />
                
                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/employees" element={<EmployeeList />} />
                
                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/owners" element={<OwnerList />} />

                {/*Renders a form for animals. */}
                    <Route path="/animals/create" element={<AnimalForm />} />
                
                {/*Renders a form for new employees. */}
                    <Route path="/employees/create" element={<EmployeeForm />} />               

            </Routes>
        </>
    )
}
