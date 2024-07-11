'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

// const initialCounts={
//   adultCount:1,
//   childCount:0,
//   seniorCount:0
// }

function HotelsFormPage() {
// const [count, setCount] = useState(initialCounts)
const [handleCounts, setHandleCounts] = useState()
const [modalOpen, setModalOpen] = useState(false)

  const searchParams = useSearchParams();

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [destination, setDestination] = useState('');
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  return (
    <>
      <div className="w-[940px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
        <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[11px]">
            <div className="flex-1 rounded-3xs bg-whitesmoke flex flex-col items-start justify-start pt-[11px] px-[22px] pb-2.5 box-border min-w-[192px] z-[2]">
              <div className="relative text-base font-average text-black text-left z-[3]">
                Find accommodation in
              </div>
              <input
                className="w-[179px] border-none outline-none font-average text-base bg-[transparent] h-[19px] relative text-gray-200 text-left inline-block p-0 z-[4]"
                placeholder="Where do you want to go?"
                type="text"
                name="destination"
              />
            </div>
            <div className="w-[134px] rounded-3xs bg-whitesmoke flex flex-col items-start justify-start pt-[11px] px-[18px] pb-2.5 box-border z-[2]">
              <label
                htmlFor="check-in"
                className="bg-inherit relative text-base font-average text-black text-left inline-block min-w-[68px] z-[3]"
              >
                Check-in
              </label>
              <DatePicker
                id="check-in"
                name="checkin"
                portalId="root-portal"
                selected={checkInDate}
                value={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                timeInputLabel="Time:"
                dateFormat="EEE, MMMM dd"
                showTimeInput
                placeholderText="Mon, 18 Mar - 11:00 AM"
                className="relative bg-inherit outline-none text-base font-average text-gray-200 inline-block  focus:outline-none focus:origin-bottom"
              />
            </div>
            <div className="w-[134px] rounded-3xs bg-whitesmoke flex flex-col items-start justify-start pt-[11px] px-[13px] pb-2.5 box-border z-[2]">
              <label
                htmlFor="check-out"
                className="relative bg-inherit text-base font-average text-black text-left inline-block min-w-[75px] z-[3]"
              >
                Check-out
              </label>
              <DatePicker
                id="check-out"
                name="checkout"
                portalId="root-portal"
                selected={checkOutDate}
                value={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                timeInputLabel="Time:"
                dateFormat="EEE, MMMM dd"
                showTimeInput
                placeholderText="Mon, 18 Mar - 11:00 AM"
                className="relative bg-inherit outline-none text-base font-average text-gray-200 inline-block  focus:outline-none focus:origin-bottom"
              />
            </div>
            <div className="w-[175px] rounded-3xs bg-whitesmoke flex flex-col items-start justify-start pt-[11px] px-[18px] pb-2.5 box-border z-[2]">
              <div className="w-[51px] relative text-base font-average text-black text-left inline-block z-[3]">
                Guests
              </div>
              <button
               onClick={(e)=>{e.preventDefault();
               setModalOpen(modalOpen)}}
                className="relative text-base font-average text-gray-200 text-left inline-block min-w-[109px] z-[4]"
              >
                2 guests, 1 room
              </button>
            </div>
            <button
              type="submit"
              className="cursor-pointer [border:none] p-0 bg-[transparent] h-[59px] w-[110px] relative whitespace-nowrap"
            >
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-blue-300 w-full h-full z-[2]" />
              <div className="absolute top-[20px] left-[18px] text-base font-average text-white text-left inline-block w-[84px] min-w-[84px] z-[3]">
                Get a quote
              </div>
            </button>
          </div>
          <div className="w-[800px] flex flex-row items-start justify-start gap-[37px] max-w-full mq450:gap-[18px] mq750:flex-wrap">
            <input
              className="w-full border-none outline-none bg-whitesmoke h-[59px] flex-1 rounded-3xs flex flex-row items-start justify-start py-5 px-[22px] box-border font-average text-base text-gray-200 min-w-[181px] z-[2]"
              placeholder="Name"
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="w-full border-none outline-none bg-whitesmoke h-[59px] flex-[0.9091] rounded-3xs flex flex-row items-start justify-start py-5 px-[31px] box-border font-average text-base text-gray-200 min-w-[181px] z-[2] mq450:flex-1"
              placeholder="Email address"
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full border-none outline-none bg-neutral-100 h-[59px] flex-[0.9596] rounded-3xs flex flex-row items-start justify-center py-6 px-7 max-md:px-5 font-average text-base text-gray-200 min-w-[181px] z-[2] mq450:flex-1"
              placeholder="Phone number"
              type="tel"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </form>
      </div>
     
    </>
  );
}

export default HotelsFormPage;
