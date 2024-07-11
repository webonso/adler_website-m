"use client"

import React, { useState, useEffect } from 'react';
import FlightSelection from './FlightSelection';
import Modal from './modal'; // Import Modal component

function FlightSelection () {
  const [selectedClass, setSelectedClass] = useState('economy');
  const [numAdults, setNumAdults] = useState(1);
  const [numElderly, setNumElderly] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const incrementAdult = () => {
    setNumAdults(prevCount => Math.max(prevCount + 1, 1));
  };

  const decrementAdult = () => {
    setNumAdults(prevCount => Math.max(prevCount - 1, 0));
  };

  const incrementChild = () => {
    setNumChildren(prevCount => prevCount + 1);
  };

  const decrementChild = () => {
    setNumChildren(prevCount => Math.max(prevCount - 1, 0));
  };

  const handleClick = () => {
    // Open the modal here (instructions below)
    console.log(${numAdults + numElderly + numChildren} persons, ${selectedClass} class);
  };

  const totalPassengers = numAdults + numElderly + numChildren;
  const formattedOutput= totalPassengers > 1 ? totalPassengers.length + "persons" : "1 person ${selectedClass} class"

  return (
    <div>
      <select value={selectedClass} onChange={handleClassChange}>
        <option value="business">Business Class</option>
        <option value="economy">Economy Class</option>
        <option value="common">Common Class</option>
      </select>
      <div>
        <span>Adults (6-65)</span>
        <button onClick={decrementAdult}>-</button>
        <span>{numAdults}</span>
        <button onClick={incrementAdult}>+</button>
      </div>
      <div>
        <span>Elderly (65+) </span>
        <button onClick={decrementAdult}>-</button>
        <span>{numAdults}</span>
        <button onClick={incrementAdult}>+</button>
      </div>
      <div>
        <span>Children (0-6)</span>
       
        <span>{numChildren}</span>

        <button onClick={incrementChild}>+</button>
        <button onClick={decrementChild}>-</button>
      </div>
      <button onClick={handleClick}>Select</button>
      <p>{formattedOutput }</p>
    </div>
  );
};















const FlightBooking = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null); // Stores selected data

  const [selectedClass, setSelectedClass] = useState('economy');
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numElderly, setNumElderly] = useState(0);


  const handleSelect = (formattedValue) => {
    setShowModal(true);
    setSelectedData(formattedValue); // Capture formatted value before modal opens
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const totalPassengers = numAdults + numElderly + numChildren;
  const formattedOutput= totalPassengers > 1 ? totalPassengers.length + "persons" : "1 person ${selectedClass} class"


  return (
    <>
      {formattedOutPut}
      {showModal && (
        <Modal isOpen={showModal} onSelect={handleSelect} handleClick={handleClick} 
          selectedClass={selectedClass}/> 
      )}
    </>
  );
};


const Modal =({handleClassChange}) =>{

  const handleInputChange =(e) => {
    setSelectedClass(event.target.value);

  }
    return (
      <div>
        <select value={selectedClass} onChange={handleInputChange}>
          <option value="passenger">Passenger<option>
          <option value="economy">Economy<option>
          <option value="passenger">Passenger<option>
         <option value="first-class">First Class<option
      </select>
    
        <span>Adults: </span>
        <span>{numAdults}</span>
        <button onClick={decrementAdult}>-</button>
        <button onClick={incrementAdult}>+</button
       <div>
        <span>Children: </span>
        <span>{numChildren}</span>
        <button onClick={decrementChild}>-</button>
        <button onClick={incrementChild}>+</button>
        </div>
      </div>
    )
}




