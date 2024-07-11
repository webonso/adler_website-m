'use client';

// import {differenceInCalendarDays, format} from "date-fns";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SuccessQuote from '../successQuote';
import PortalPopup from '../portal-popup';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// const initialCounts = {
//   adultCount: 1,
//   seniorCount: 0,
//   childCount: 0,
// };
const ReturnFlight = () => {
  // const [count, setCount] = useState(initialCounts);
  const [handleCounts, setHandleCounts] = useState();
  const [selectedClass, setSelectedClass] =useState()


  const [modalOpen, setModalOpen] = useState(false)



  const [startDate, setStartDate] = useState(new Date().toDateString());

  
  const submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    res = await res.json();
    setPostsState([...postsState, res]);
    setTitle('');
    setContent('');
    setLoading(false);
  };

  return (
    <>
      <form className="flex flex-row flex-wrap items-end justify-start gap-[14px] max-w-full text-left">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[261px] max-w-full">
          <div className="self-stretch rounded-3xs bg-neutral-100 flex flex-row items-end justify-start pt-[11px] px-[18px] pb-2.5 box-border gap-[36px] max-w-full z-[1] mq450:flex-wrap mq450:gap-[18px]">
            <div className="flex flex-col items-start justify-start">
              <label
                htmlFor="departure"
                className="bg-inherit relative inline-block min-w-[70px] z-[2]"
              >
                Departure
              </label>
              <input
                placeholder="London (LON)"
                id="departure"
                type="text"
                className="bg-inherit border-none focus:outline-none relative text-gray inline-block min-w-[97px] z-[3]"
              />
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="w-6 h-6 relative z-[3]">
                <Image
                  className="object-cover size-6"
                  alt="icon direction"
                  fill
                  priority
                  src="/icons/swap_horiz.png"
                  sizes="(height: 24px, width:24px)"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <label
                htmlFor="destination"
                className="bg-inherit relative inline-block min-w-[79px] z-[2]"
              >
                Destination
              </label>
              <input
                id="destination"
                placeholder="City or Airport"
                className="relative focus:outline-none bg-inherit text-gray inline-block min-w-[97px] z-[3]"
              />
            </div>
          </div>
        </div>

        <div className="w-[186px] rounded-3xs bg-neutral-100 flex flex-col items-start justify-start pt-[11px] px-[18px] pb-2.5 box-border z-[1]">
          <div className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px] z-[2]">
            Leaving on
          </div>

          <DatePicker
            id="leaving on"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            portalId="root-portal"
            popperClassName="date-picker-reports"
            popperPlacement="bottom-center"
            showMeridian
            dateFormat="EEE, MMMM dd"
            placeholderText="Tues, 12 Mar"
            showMonthDropdown
            showYearDropdown
            showTimeInput
            showFullMonthYearPicker
            dropdownMode="select"
            className="focus:outline-none border-none bg-inherit"
          />
        </div>
        <button
        onClick={(e)=>{
          e.preventDefault();
          modalOpen(true)}}
          className="rounded-3xs bg-neutral-100 flex flex-row items-start justify-start pt-5 pb-[15px] pr-1 pl-[9px] whitespace-nowrap z-[1]"
        >
          <p className="relative inline-block min-w-[127px] z-[3]">
            I Person, Economy
            
            {/* {count}Person{count > 0 ? 's' : null}
            {selectedClass} */}
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
        </button>

        <button className="cursor-pointer [border:none] pt-[22px] pb-[18px] pr-3 pl-[17px] bg-primary rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-slate-200">
          <div className="relative text-base font-average text-white text-left inline-block min-w-[81px] z-[3]">
            Get a quote
          </div>
        </button>

        <div className="w-[885px] flex flex-row items-start justify-start py-0 px-[2px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-center gap-[17px] max-w-full mq1050:flex-wrap">
            <input
              className="w-full [border:none] [outline:none] bg-neutral-100 h-[59px] flex-1 rounded-3xs
               flex flex-row items-start justify-start pt-[17px] px-6 pb-[23px] box-border font-average text-base text-gray min-w-[125px] z-[1]"
              placeholder="Name"
              type="text"
            />

            <input
              className="w-full [border:none] [outline:none] bg-neutral-100 h-[59px] flex-[0.9091] rounded-3xs flex flex-row items-start justify-start py-5 px-[31px] box-border 
              font-average text-base text-gray-200 min-w-[181px] z-[2] mq450:flex-1"
              placeholder="Email address"
              type="email"
            />
            <input
              className="w-full [border:none] [outline:none] bg-neutral-100 h-[59px] flex-[0.9596] 
              rounded-3xs flex flex-row items-start justify-start py-5 px-[26px] box-border font-average text-base text-gray-200 min-w-[181px] z-[2] mq450:flex-1"
              placeholder="Phone number"
              type="tel"
            />
          </div>
        </div>
      </form>
      {/* {modalOpen && (
        <ModalClass
          count={count}
          handleCounts={handleCounts}
          selectedClass={selectedClass}
        />
      )} */}
    </>
  );
};

export default ReturnFlight;
