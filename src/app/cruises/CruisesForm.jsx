'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const initialState = {
  startcity: '',
  routetofollow: '',
  telephone: '',
  mcruise: '',
  travellingnos: '',
  name: '',
  email: '',
  location: '',
};

function CruisesForm() {
  const [startcity, setStartCity] = useState('');
  const [routetofollow, setRouteToFollow] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !name || !telephone) {
      alert('All fields are required. Please fill them accordingly');
      return;
    }

    try {
      const {
        startcity,
        routetofollow,
        telephone,
        monthcruise,
        travellingnos,
        name,
        email,
        location,
      } = formData;
      const res = await fetch('http://localhost:3000/api/cruises', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error('Failed to create a topic');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="self-stretch h-[896px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-full">
        <form className="self-stretch w-[674px] shadow-[0px_0px_2px_2px_rgba(0,_0,_0,_0.25)] rounded-t-3xs rounded-b-xl bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[50px] gap-[109px] max-w-full z-[2] text-left text-13xl text-black font-average border-[2px] border-solid border-gainsboro-100 mq450:gap-[27px] mq450:pb-[21px] mq450:box-border mq725:gap-[54px] mq975:pb-8 mq975:box-border">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[26px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
              <div className="self-stretch h-6 relative rounded-t-3xs rounded-b-none bg-blue-100 z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start py-0 px-12">
                    <div className="relative inline-block min-w-[100px] z-[4] mq450:text-lgi mq975:text-7xl">
                      Cruises
                    </div>
                  </div>
                  <div className="h-[26px] relative text-lg text-gray-200 inline-block shrink-0 z-[3]">
                    Please, fill the form below
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-[47px] box-border max-w-full mq725:pl-[23px] mq725:pr-[23px] mq725:box-border">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[11.3px] max-w-full">
                <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[2] border-[2px] border-solid border-gainsboro-100">
                  <div className="self-stretch w-[576px] relative rounded-3xs bg-white box-border hidden max-w-full border-[2px] border-solid border-gainsboro-100" />
                  <div className="self-stretch w-0 relative box-border z-[3] border-r-[2px] border-solid border-gainsboro-200" />
                  <input
                    className="w-[61px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-200"
                    placeholder="Starting City"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[3] border-[2px] border-solid border-gainsboro-100">
                  <div className="self-stretch w-[576px] relative rounded-3xs bg-white box-border hidden max-w-full border-[2px] border-solid border-gainsboro-100" />
                  <div className="self-stretch w-0 relative box-border z-[4] border-r-[2px] border-solid border-gainsboro-200" />
                  <input
                    className="w-[67.3px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                    placeholder="Routes"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                  <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[3] border-[2px] border-solid border-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="self-stretch w-[576px] relative rounded-3xs bg-white box-border hidden max-w-full border-[2px] border-solid border-gainsboro-100" />
                    <div className="self-stretch w-0 relative box-border z-[4] border-r-[2px] border-solid border-gainsboro-200" />
                    <input
                      className="w-52 [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                      placeholder="Month for the cruise"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[3] border-[2px] border-solid border-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="self-stretch w-[576px] relative rounded-3xs bg-white box-border hidden max-w-full border-[2px] border-solid border-gainsboro-100" />
                  <div className="self-stretch w-0 relative box-border z-[4] border-r-[2px] border-solid border-gainsboro-200" />
                  <input
                    className="w-[210px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                    placeholder="Number of travellers"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[3] border-[2px] border-solid border-gainsboro-100">
                  <div className="self-stretch w-[576px] relative rounded-3xs bg-white box-border hidden max-w-full border-[2px] border-solid border-gainsboro-100" />
                  <div className="self-stretch w-0 relative box-border z-[4] border-r-[2px] border-solid border-gainsboro-200" />
                  <input
                    className="w-[61px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[3] border-[2px] border-solid border-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="self-stretch w-0 relative box-border z-[1] border-r-[2px] border-solid border-gainsboro-200" />
                  <input
                    className="w-[140px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                  <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[3] border-[2px] border-solid border-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="self-stretch w-0 relative box-border z-[1] border-r-[2px] border-solid border-gainsboro-200" />
                    <input
                      className="w-[151px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                      placeholder="Phone number"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                  <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[3] border-[2px] border-solid border-gainsboro-100">
                    <div className="self-stretch w-0 relative box-border z-[1] border-r-[2px] border-solid border-gainsboro-200" />
                    <input
                      className="w-[136px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                      placeholder="Your location"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full mq725:pl-6 mq725:pr-6 mq725:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[60px] flex-1 relative max-w-full">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-blue-100 box-border w-full h-full z-[3] border-[2px] border-solid border-gainsboro-100" />
              <div className="absolute top-[9px] left-[249px] text-9xl font-average text-white text-left inline-block w-[86px] h-[34px] min-w-[86px] z-[4] mq450:text-3xl">
                Submit
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CruisesForm;
