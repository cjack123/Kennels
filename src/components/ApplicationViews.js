import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
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




export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("kennel_customer", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            
            <Routes>

                {/* Renders auth and login */}
                    <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                    <Route exact path="/register" element={<Register />} />



                {/* Render the location list when http://localhost:3000/ */}
                    <Route exact path="/" element={<Home />} />

                {/* Render the owner list when http://localhost:3000/owners */}
                    <Route path="/owners" element={<OwnerList />} />


                {/* Render the customer list when http://localhost:3000/customers */}
                <Route excat path="/customers" element={
                    <PrivateRoute>
                        <CustomerList />
                    </PrivateRoute>} />
                <Route path="/customers/create" element={<CustomerForm />} /> {/* Renders a new customer form.*/}


                
                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={
                    <PrivateRoute>
                        <EmployeeList />
                    </PrivateRoute>} />
                <Route path="/employees/create" element={<EmployeeForm />} /> {/*Renders a form for new employees. */}

                
                {/* Render the animal list when http://localhost:3000/animals */}                  
                <Route excat path="/animals" element={
                    <PrivateRoute>
                        <AnimalList />
                    </PrivateRoute>} /> 
                <Route path="/animals" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} /> {/*Renders a form for animals. */}

                        {/*
                            This is a new route to handle a URL with the following pattern:
                            http://localhost:3000/animals/1

                            It will not handle the following URL because the `(\d+)`
                            matches only numbers after the final slash in the URL
                            http://localhost:3000/animals/jack
                            */}


                {/* Render the location list when http://localhost:3000/locations */}
                    <Route path="/locations" element={<LocationList />} />
                    <Route exact path="/locations/:locationId" element={<LocationDetail />} /> {/* Make sure you add the `exact` attribute here */}
                    <Route path="/locations/create" element={<LocationForm />} />  {/* Our shiny new route. */}

                        {/* 
                            This is a new route to handle a URL with the following pattern:
                            http://localhost:3000/locations/1

                            It will not handle the following URL because the `(\d+)`
                            matches only numbers after the final slash in the URL
                            http://localhost:3000/locations/jack
                        */}

            </Routes>
        </>
    )
}
