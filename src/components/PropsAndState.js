import React, { useState } from "react"

export const PropsAndState = ({ yourName, address }) => {
  let [countClicks, setCountClicks] = useState(10) //the number in paratheses is the starting interger

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = Math.max (0,--countClicks) //++ adds the interger and -- substacts the interger
    if (countClicks === 0) {
      alert ("You did it!")

    } //learned if statement needs to be right after newCountClicks and not setCountClicks
    setCountClicks(newCountClicks) 

  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
      <h3>This is a cool address: {address.streetAddress} {address.city}, {address.state}       {address.zip}.</h3>
    </>
  )
}