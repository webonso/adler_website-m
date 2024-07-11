'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import SubmitButton from '../../components/SubmitButton';
import { useRouter } from 'next/navigation';


const ContactForm = () => {
 

  return (
    <>
      <section className="self-stretch h-screen relative flex flex-col items-center justify-center gap-[72px] max-w-full mq450:gap-[18px] mq975:gap-[36px]">
        <div className="absolute z-40 bottom-40 w-full mx-auto">
          <div className="self-stretch h-[896px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-full">
            <form
          
              className="w-[674px] shadow-[0px_0px_2px_2px_rgba(0,_0,_0,_0.25)] rounded-t-3xs rounded-b-xl bg-white box-border flex flex-col items-end justify-start pt-0 px-0 pb-9 gap-[19px] max-w-full text-left text-13xl text-black font-average border-[2px] border-solid border-gainsboro-100"
            >
              <div className="self-stretch h-6 relative rounded-t-3xs rounded-b-none bg-blue-100 z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[46px] pl-[52px] box-border max-w-full mq750:pl-[26px] mq750:pr-[23px] mq750:box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full mq750:gap-[23px]">
                  <div className="self-stretch h-[147px] flex flex-col items-start justify-start gap-[22px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative z-[2] mq450:text-lgi mq1050:text-7xl">
                          Contact Form
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-[11.5px] text-lg text-gray-200">
                          <div className="h-[26px] relative inline-block z-[3]">
                            Please, fill the form below
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[2] border-[2px] border-solid border-gainsboro-100">
                      <div className="self-stretch w-0 relative box-border z-[1] border-r-[2px] border-solid border-gainsboro-200" />
                      <input
                        className="w-[61px] border-none outline-none bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                        placeholder="Name"
                        type="text"
                        name="fullname"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border gap-[46px] max-w-full mq750:gap-[23px]">
                    <div className="self-stretch h-[60px] rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[2] border-[2px] border-solid border-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <div className="self-stretch w-0 relative box-border z-[3] border-r-[2px] border-solid border-gainsboro-200" />
                      <input
                        className="w-[140px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                        placeholder="Email address"
                        name="email"
                        type="email"
                      />
                    </div>

                    <div className="self-stretch h-[60px] rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-0 px-[48.5px] pb-px gap-[16.5px] max-w-full z-[2] border-[2px] border-solid border-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <div className="self-stretch w-0 relative box-border z-[3] border-r-[2px] border-solid border-gainsboro-200" />
                      <input
                        className="w-[151px] [border:none] [outline:none] bg-[transparent] h-11 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border font-average text-5xl text-gray-100"
                        placeholder="Phone number"
                        type="tel"
                        name="phone"
                      />
                    </div>
                    <textarea
                      className="bg-white h-[265px] w-auto [outline:none] self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-[15px] px-[35px] font-average text-5xl text-gray-100 z-[2] border-[2px] border-solid border-gainsboro-100"
                      placeholder="Give details"
                      rows={13}
                      cols={29}
                      required
                      name="message"
                    />
                  </div>
                  <button type="submit"  className='bg-green-500'>
                 Submit
                  </button>

                  {/* <SubmitButton /> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* {successMsg && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">
              Thank you for your message!
            </h2>
            <p className="text-lg mb-8">
              We will get back to you as soon as possible.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => router.refresh()}
            >
              OK
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ContactForm;


