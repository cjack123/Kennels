import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from '../components/animal/AnimalList.js'
import { LocationList } from '../components/Location/LocationList.js'
import { CustomerList } from '../components/Customer/CustomerList.js'
import { EmployeeList } from '../components/Employee/EmployeeList.js'
import { OwnerList } from '../components/Owner/OwnerList.js'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                    <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/locations */}
                    <Route path="/locations" element={<LocationList />} />

                {/* Render the animal list when http://localhost:3000/animals */}                   
                    <Route path="/animals" element={<AnimalList />} />


                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/customers" element={<CustomerList />} />
                
                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/employees" element={<EmployeeList />} />
                
                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/owners" element={<OwnerList />} />

            </Routes>
        </>
    )
}
