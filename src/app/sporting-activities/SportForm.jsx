'use client';

import React, { useState } from 'react';
import SubmitButton from '../../components/SubmitButton';
import { useRouter } from 'next/navigation';

function ActivitiesForm() {
 

  return (
    <>
      <div className="self-stretch h-[896px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-full">
        <form
         
          className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-black font-average"
        >
          <div className="w-[674px] shadow-[0px_0px_2px_2px_rgba(0,_0,_0,_0.25)] rounded-t-3xs rounded-b-xl bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-9 gap-[19px] max-w-full z-[1] border-[2px] border-solid border-gainsboro-100">
            <div className="self-stretch h-6 relative rounded-t-3xs rounded-b-none bg-blue-100 z-[1]" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full mq825:pl-6 mq825:pr-6 mq825:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full mq825:gap-[23px]">
                <div className="self-stretch h-[147px] flex flex-col items-start justify-start gap-[26px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative z-[3] mq450:text-lgi mq825:text-7xl">
                        Sporting Activities
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-[27px] pl-7 text-lg text-gray-200">
                        <div className="relative z-[2]">
                          Please, fill the form below
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[2] border-[2px] border-solid border-gainsboro-100">
                    <div className="self-stretch w-0 relative box-border z-[3] border-r-[2px] border-solid border-gainsboro-200" />
                    <input
                      className="w-[61px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                      placeholder="Name"
                      id="name"
                      type="text"
                      required
                      name="name"
                     
              
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border gap-[46px] max-w-full mq825:gap-[23px]">
                  <div className="self-stretch h-[60px] rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[2] border-[2px] border-solid border-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="self-stretch w-0 relative box-border z-[3] border-r-[2px] border-solid border-gainsboro-200" />
                    <input
                      className="w-[140px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                      placeholder="Email address"
                      type="text"
                      id="email"
                      name="email"
                      required
                     
                    />
                  </div>
                  <div className="self-stretch h-[60px] rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[2] border-[2px] border-solid border-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="self-stretch w-0 relative box-border z-[3] border-r-[2px] border-solid border-gainsboro-200" />
                    <input
                      className="w-[151px] [border:none] outline-none bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                      placeholder="Phone number"
                      type="tel"
                      id="phone"
                      name="phone"
                
                    />
                  </div>
                  <textarea
                    className="bg-white h-[265px] w-auto outline-none self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-[15px] px-[35px] font-average text-5xl text-gray-100 z-[2] border-[2px] border-solid border-gainsboro-100"
                    placeholder="Give details"
                    rows={13}
                    cols={29}
                    name="message"
                    id="message"
                   
                  />
                </div>
                <SubmitButton />
              </div>
            </div>
          </div>
        </form>
      </div>
     
    </>
  );
}

export default ActivitiesForm;
