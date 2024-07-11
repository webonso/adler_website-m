'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import PortalPopup from '../portal-popup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


// const initialCount = {
//   childCount: 0,
//   adultCount: 1,
//   seniorCount: 0,
// };

// const options=["economy", "premium economy", "passenger class", "first class"]

function MultiCityFlight() {
  // const [count, setCount] = useState(initialCount);

  // const [selectedOption, setSelectedOption] = useState("economy")



 

  const [leavingOn, setLeavingOn] = useState('');
  const [departure, setDeparture] = useState('');
  const [checkOut, setCheckoutDate] = useState('');
  const [checkIn, setCheckInDate] = useState('');

  const SearchParams = useSearchParams();


  const [starDate, setStarDate] = useState(new Date().toDateString());

  return (
    <>
      <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[14px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[13.5px] min-w-[261px] max-w-full">
            {/*  */}
            <div className="self-stretch rounded-3xs bg-neutral-100 flex flex-row items-end justify-start pt-[11px] px-[18px] pb-2.5 box-border gap-[36px] max-w-full z-[1] mq450:gap-[18px] mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start">
                <label
                  htmlFor="departure"
                  className="bg-inherit relative text-base font-average text-black text-left inline-block min-w-[70px] z-[2]"
                >
                  Departure
                </label>
                <input
                  type="text"
                  placeholder="London (LON)"
                  id="departure"
                  name="departure"
                  // onChange={(ev) => setDeparture(ev.target.value)}
                  className="relative bg-inherit outline-none text-base font-average text-gray text-left inline-block min-w-[108px] z-[3]"
                />
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                <div className="relative w-6 h-6 z-[2]">
                  <Image
                    className="object-cover"
                    src={'/icons/swap_horiz.png'}
                    fill
                    alt="image"
                    sizes="(height: 24px, width : 24px)"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <label
                  htmlFor="destination"
                  className="bg-inherit relative text-base font-average text-black text-left inline-block min-w-[79px] z-[2]"
                >
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="City or airport"
                  id="destination"
                  name="destination"
                  className="relative bg-inherit focus:outline-none text-base font-average text-gray text-left inline-block min-w-[97px] z-[3]"
                />
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-neutral-100 flex flex-row items-end justify-start pt-2 px-[18px] pb-[11px] box-border gap-[36px] max-w-full z-[1] mq450:gap-[18px] mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0 gap-[2px]">
                <label
                  htmlFor="departure"
                  className="bg-inherit relative text-base font-average text-black text-left inline-block min-w-[70px] z-[2]"
                >
                  Departure
                </label>
                <input
                  type="text"
                  id="departure"
                  placeholder="City or airport"
                  className="bg-inherit border-none outline-none focus:outline-none relative text-base font-average text-gray text-left inline-block min-w-[98px] z-[2]"
                />
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                <div className="relative w-6 h-6 z-[2]">
                  <Image
                    className="object-cover"
                    src={'/icons/swap_horiz.png'}
                    fill
                    alt="image"
                    loading="lazy"
                    sizes="{width: 24px, height: 24px}"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <label
                  htmlFor="destination"
                  className="bg-inherit relative text-base font-average text-black text-left inline-block min-w-[79px] z-[2]"
                >
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="City or airport"
                  className="bg-inherit outline-none focus:outline-none relative text-base font-average text-gray text-left inline-block min-w-[97px] z-[2]"
                />
              </div>
            </div>
          </div>
          <div className="w-[186px] flex flex-col items-start justify-start gap-[12px] relative">
            <div className="relative self-stretch bg-neutral-100 rounded-3xs flex flex-col items-start justify-start pt-[11px] px-[18px] pb-2.5 z-[1]">
              <label
                htmlFor="leaving-on"
                className="bg-inherit relative text-base font-average text-black text-left inline-block min-w-[75px] z-[2]"
              >
                Leaving on
              </label>
              <DatePicker
                id="leaving-on"
                portalId="root-portal"
                selected={leavingOn}
                onChange={(date) => setLeavingOn(date)}
                timeInputLabel="Pick up Time:"
                showTimeInput
                dateFormat="EEE, MMMM dd"
                placeholderText="Tues, 12 Mar"
                className="focus:outline-none outline-none border-none bg-inherit font-average text-base appearance-none z-40 text-gray"
              />
            </div>
            <div className="self-stretch rounded-3xs bg-neutral-100 flex flex-col items-start justify-start pt-2 px-[18px] pb-[11px] gap-[2px] z-[1]">
              <label
                htmlFor="leaving-on"
                className="bg-inherit outline-none relative text-base font-average text-black text-left inline-block min-w-[75px] z-[2]"
              >
                Leaving on
              </label>
              <DatePicker
                portalId="root-portal"
                id="leaving-on"
                selected={leavingOn}
                onChange={(date) => setLeavingOn(date)}
                timeInputLabel="Pick up Time:"
                showTimeInput
                dateFormat="EEE, MMMM dd"
                placeholderText="Tues, 12 Mar"
                className="appearance-none border text-gray outline-none font-average text-base h-[19px] relative text-left inline-block p-0 z-[2] focus:outline-none border-none bg-inherit"
              />
            </div>
          </div>
          <div className="h-[130px] flex flex-col items-start justify-start">
            <button 
              className="rounded-3xs bg-neutral-100 flex flex-row items-start justify-start pt-5 pb-[15px] pr-1 pl-[9px] whitespace-nowrap z-[1]"
            >
              <div className="relative inline-block min-w-[127px] z-[3]">
                I Person, Economy
              </div>
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
          </div>
          <div className="h-[130px] flex flex-col items-start justify-start">
            <button className="cursor-pointer [border:none] pt-[18px] pb-[17px] pr-[17px] pl-[18px] bg-blue-100 rounded-3xs flex flex-row items-start justify-start gap-[4px] z-[1]">
              <div className="h-6 w-6 relative z-[2] min-h-[24px]">
                <Image
                  className="object-contain "
                  alt=""
                  src="/icons/search.png"
                  fill
                  sizes='(width:24px, height:24px)'
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative text-base font-average text-white text-left inline-block min-w-[47px] z-[2]">
                  Search
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="w-[885px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-center gap-[17px] max-w-full mq1050:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-1 pl-0">
              <div className="cursor-pointer [border:none] pt-2.5 pb-[11px] pr-4 pl-5 bg-lightslategray rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-slategray-100">
                <div className="relative text-base font-average text-black text-left inline-block min-w-[113px] z-[2]">
                  Add destination
                </div>
              </div>
            </div>
            <button
              type="reset"
              className="flex flex-col items-start justify-start pt-3.5 pb-0 pr-5 pl-0"
            >
              <div className="relative text-base font-average text-black text-left inline-block min-w-[51px] z-[1]">
                Cancel
              </div>
            </button>
            <input
              className="w-full [border:none] [outline:none] bg-neutral-100 h-[59px] flex-1 rounded-3xs flex flex-row items-start justify-start pt-[17px] px-6 pb-[23px] box-border font-average text-base text-gray min-w-[125px] z-[1]"
              placeholder="Name"
              type="text"
            />
            <input
              className="w-full [border:none] [outline:none] bg-neutral-100 h-[59px] flex-[0.9091] rounded-3xs flex flex-row items-start justify-start py-5 px-[31px] box-border font-average text-base text-gray-200 min-w-[181px] z-[2] mq450:flex-1"
              placeholder="Email address"
              type="email"
            />
            <input
              className="w-full [border:none] [outline:none] bg-neutral-100 h-[59px] flex-[0.9596] rounded-3xs flex flex-row items-start justify-start py-5 px-[26px] box-border font-average text-base text-gray-200 min-w-[181px] z-[2] mq450:flex-1"
              placeholder="Phone number"
              type="tel"
            />
          </div>
        </div>
      </form>

      {/* {selectedClass && (
        <ModalClass
          count={count}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
          option={option}
        />
      )} */}
    </>
  );
}

export default MultiCityFlight;
