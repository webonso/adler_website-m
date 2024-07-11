'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { format, formatDate } from 'date-fns';
import DatePicker from 'react-datepicker';
import moment from 'moment';

function CarHirePage() {
  // const [startDate, setStartDate] = useState(new Date());
  const [pickUptDate, setPickUpDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date());
  const [stateAge, setStateAge] = useState(new Date());
  const [driverAge, setDriverAge] = useState(new Date());
  const [name, setName] = useState('');
  const [newAge, setNewAge] = useState(new Date());

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatDate = {
      name,
      newAge,
      driverAge,
      stateAge,
      pickUptDate,
      dropDate
    };

    try {
      const res = await fetch("http://localhost:3000/api/carhire", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formatDate),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[15px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border min-w-[232px] max-w-full">
            <div className="self-stretch rounded-3xs bg-neutral-100 flex flex-col items-start justify-start pt-[13px] px-[18px] pb-2.5 box-border max-w-full z-[1]">
              <div className="relative text-base font-average text-black text-left inline-block min-w-[116px] z-[2]">
                Pick up location
              </div>
              <input
                className="w-[108px] [border:none] [outline:none] bg-[transparent] h-[17px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border font-average text-base text-gray-200"
                placeholder="City or airport"
                type="text"
                name="pickup-location"
              />
            </div>
          </div>
          <div className="w-[199px] bg-neutral-100 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
            <div className="self-stretch rounded-3xs flex flex-col items-start justify-start pt-[11px] px-3 pb-2.5 z-[1]">
              <label
                htmlFor="pick-up"
                className="bg-inherit w-[58px] relative text-base font-average text-black text-left inline-block z-[2]"
              >
                Pick up
              </label>
              <div className="relative text-base font-average text-gray-200 text-left whitespace-nowrap z-[3]">
                <DatePicker
                  id="pick-up"
                  name="pick-up"
                  portalId="root-portal"
                  selected={pickUptDate}
                  value={new Date()}
                  onChange={(date) => setPickUpDate(date)}
                  timeInputLabel="Time:"
                  dateFormat="EEE, MMMM dd - h:mm aa"
                  showTimeInput
                  className="relative bg-inherit outline-none focus:outline-none focus:origin-bottom"
                />
              </div>
            </div>
          </div>
          <div className="rounded-3xs bg-neutral-100 flex flex-col items-start justify-start py-[11px] px-3 z-[1]">
            <label className="bg-inherit outline-none relative text-base font-average text-black text-left inline-block min-w-[58px] z-[2]">
              Drop off
            </label>
            <label
              htmlFor="drop-off"
              className="bg-inherit flex flex-row items-start justify-start py-0 pr-[3px] pl-px mt-[-1px]"
            >
              <div className="text-base font-average text-gray-200 text-left whitespace-nowrap z-[3]">
                {/* Mon, 18 Mar - 11:00 AM */}

                <DatePicker
                  id="drop-off"
                  name="drop-off"
                  portalId="root-portal"
                  selected={dropDate}
                  value={dropDate}
                  onChange={(date) => setDropDate(date)}
                  timeInputLabel="Time:"
                  dateFormat="EEE, MMMM dd - h:mm aa"
                  showTimeInput
                  placeholderText="Mon, 18 Mar - 11:00 AM"
                  className="relative bg-inherit outline-none focus:outline-none focus:origin-bottom"
                />
              </div>
            </label>
          </div>
          <button className="cursor-pointer [border:none] pt-[18px] pb-[17px] pr-[17px] pl-[18px] bg-blue-300 rounded-3xs flex flex-row items-start justify-start gap-[4px] z-[1]">
            <div className="relative h-6 w-6 min-h-[24px] z-[2]">
              <Image
                className="object-contain h-6 w-6"
                src={'/icons/search.png'}
                fill
                alt="image"
                size="(width: 24px, height: 24px)"
              />
            </div>

            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative text-base font-average text-white text-left inline-block min-w-[47px] z-[2]">
                Search
              </div>
            </div>
          </button>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[18px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <div className="relative text-base font-average text-black text-left inline-block min-w-[83px] z-[1]">
                {`Driver's age`}
              </div>
            </div>
            <div className="rounded-3xs bg-neutral-100 flex flex-row items-start justify-start pt-2.5 pb-[9px] pr-[5px] pl-3 gap-[13px] z-[1]">
              <label
                htmlFor="driver-age"
                className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"
              >
                <DatePicker
                  id="driver-age"
                  portalId="root-portal"
                  selected={newAge}
                  onChange={(date) => setNewAge(date)}
                  placeholderText="20+"
                  scrollableYearDropdown
                  showYearDropdown
                  dateFormat="dd/MM/yyyy"
                  // dateFormatCalendar="MMMM"
                  peekNextMonth
                  showMonthDropdown
                  dropdownMode="select"
                  maxDate={moment().subtract(20, 'years')._d}
                  className="relative appearance-none outline-none w-full bg-inherit text-base font-average text-black text-left inline-block min-w-[30px] z-[2]"
                />

                {/* <input id="driver-age" placeholder="20+" type="text" /> */}
              </label>
              <div className="relative h-6 w-6 min-h-[24px] z-[2]">
                <Image
                  className="object-contain"
                  src={'/icons/arrow_drop_down.png'}
                  fill
                  alt="image"
                  sizes="(height: 24px, width: 24px)"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CarHirePage;
