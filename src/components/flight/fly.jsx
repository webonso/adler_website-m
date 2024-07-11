"use client"

import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const FlightSelection = () => {
  const [selectedClass, setSelectedClass] = useState('economy'); // Initial class
  const [passengerCount, setPassengerCount] = useState(1); // Initial passenger count
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const initialClass = searchParams.get('class') || 'economy';
    const initialCount = parseInt(searchParams.get('count')) || 1;
    setSelectedClass(initialClass);
    setPassengerCount(initialCount);
  }, [searchParams]);

  const updateFlightSelection = (newClass, newCount) => {
    setSelectedClass(newClass);
    setPassengerCount(newCount);
    const updatedParams = new URLSearchParams({ class: newClass, count: newCount });
    setSearchParams(updatedParams); // Update URL search parameters
    navigate(`/?${updatedParams}`); // Update URL (optional, consider visual feedback)
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Flight class select and passenger count logic (within Modal component)
  // ... (implementation omitted for brevity, refer to explanations below)

  return (
    <div className="flight-selection-container">
      <Link
        href="#"
        className="rounded-3xs bg-neutral-100 flex flex-row items-start justify-start pt-5 pb-[15px] pr-1 pl-[9px] whitespace-nowrap z-[1]"
        onClick={toggleModal}
      >
        <p className="relative inline-block min-w-[127px] z-[3]">
          {passengerCount} <span>person{passengerCount > 1 ? 's' : null},</span>{' '}
          {selectedClass}
        </p>
        <div className="w-6 h-6 relative z-[3]">
          <Image
            className="object-cover size-6"
            loading="lazy"
            alt=""
            fill
            src="/icons/arrow_drop_down.png"
            sizes="(height: 24px, width : 24px)"
          />
        </div>
      </Link>

      {isModalOpen && (
        <Modal /* Your modal component implementation */
          selectedClass={selectedClass}
          passengerCount={passengerCount}
          updateFlightSelection={updateFlightSelection}
          onClose={toggleModal} // Optional prop to close the modal
        />
      )}
    </div>
  );
};

export default FlightSelection;


const Modal =() => {
    
}