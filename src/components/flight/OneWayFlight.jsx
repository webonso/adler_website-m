'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ShowModal from '../showModal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import SuccessQuote from '../successQuote';
import PortalPopup from '../portal-popup';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


function OneWayFlight() {

const [checkInDate, setCheckInDate] =useState(new Date())
  return (
    <>
      <form className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[14px] max-w-full text-left">
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
                type="text"
                id="departure"
                placeholder="London (LON)"
                className="bg-inherit border-none outline-none focus:outline-none relative text-gray inline-block min-w-[108px] z-[3]"
              />
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="w-6 h-6 relative z-[3]">
                <Image
                  className="object-cover size-6"
                  loading="lazy"
                  alt=""
                  fill
                  src="/icons/swap_horiz.png"
                  sizes="(height: 24px, width : 24px)"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <label
                htmlFor="city-or-airport"
                className="bg-inherit relative inline-block min-w-[79px] z-[2]"
              >
                Destination
              </label>
              <input
                placeholder="Ciy or airport"
                type="text"
                id="city-or-airport"
                className="outline-none focus:outline-none border-none bg-inherit relative text-gray inline-block min-w-[97px] z-[3]"
              />
            </div>
          </div>
        </div>

        <div className="w-[186px] rounded-3xs bg-neutral-100 flex flex-col items-start justify-start pt-[11px] px-[18px] pb-2.5 box-border z-[1]">
          <label
            htmlFor="check-in-date"
            className="border-none focus:outline-none [text-decoration:none] relative text-[inherit] inline-block min-w-[75px] z-[2]"
          >
            Leaving on
          </label>

          <DatePicker
            portalId="root-portal"
            popperClassName="date-picker-reports"
            popperPlacement="bottom-center"
            id="check-in-date"
            selected={checkInDate}
            timeCaption="Heure"
            showMeridian
            showTimeInput
            onChange={(date) => setCheckInDate(date)}
            dateFormat="EEE, MMMM dd"
            placeholderText="Tues, 12 Mar"
            className="focus:outline-none border-none bg-inherit text-gray inline-block z-[200]"
          />

          {/* <div className="w-[108px] relative text-gray inline-block z-[3]">
            Tues, 12 Mar
          </div> */}
        </div>
        <button
          
          className="rounded-3xs bg-neutral-100 flex flex-row items-start justify-start pt-5 pb-[15px] pr-1 pl-[9px] whitespace-nowrap z-[1]"
        >
          <p className="relative inline-block min-w-[127px] z-[3]">
            I Person, Economy
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
        {/* </div> */}

        <div className="w-[885px] flex flex-row items-start justify-start py-0 px-[2px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-center gap-[17px] max-w-full mq1050:flex-wrap">
            <input
              className="w-full [border:none] [outline:none] bg-neutral-100 h-[59px] flex-1 rounded-3xs
               flex flex-row items-start justify-start pt-[17px] px-6 pb-[23px] box-border font-average text-base text-gray min-w-[125px] z-[1]"
              placeholder="Name"
              id="name"
              type="text"
              // onChange={handleOnewayFlight}
            />

            <input
              className="w-full [border:none] [outline:none] bg-neutral-100 h-[59px] flex-[0.9091] rounded-3xs flex flex-row items-start justify-start py-5 px-[31px] box-border font-average text-base text-gray-200 min-w-[181px] z-[2] mq450:flex-1"
              placeholder="Email address"
              type="email"
              name='email'
              // onChange={handleOnewayFlight}
            />
            <input
              className="w-full [border:none] [outline:none] bg-neutral-100 h-[59px] flex-[0.9596] rounded-3xs flex flex-row items-start justify-start py-5 px-[26px] box-border font-average text-base text-gray-200 min-w-[181px] z-[2] mq450:flex-1"
              placeholder="Phone number"
              type="tel"
              name="phone"
              // onChange={handleOnewayFlight}
            />
          </div>
        </div>
      </form>
      {/* {selectedClass && (
        <ModalClass
         
        />
      )} */}
      {/* {successMsg && (
        <SuccessQuote
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
      )} */}
    </>
  );
}

export default OneWayFlight;
