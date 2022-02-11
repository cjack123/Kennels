import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from '../components/animal/AnimalList.js'
import { LocationCard } from '../components/Location/LocationCard.js'
import { CustomerCard } from '../components/Customer/CustomerCard.js'
import { EmployeeCard } from '../components/Employee/EmployeeCard.js'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                    <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/locations */}
                    <Route path="/locations" element={<LocationCard />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                    
                    <Route path="/animals" element={<AnimalList />} />



                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/customers" element={<CustomerCard />} />
                
                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/employees" element={<EmployeeCard />} />

            </Routes>
        </>
    )
}
