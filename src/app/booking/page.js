'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import OneWayFlight from '@/components/flight/OneWayFlight';
import MultiCityFlight from '@/components/flight/MultiCityFlight';
import ReturnFlight from '@/components/flight/ReturnFlight';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';


const FlightPage = () => {
  const FlightTabsVariants = ['Return', 'One-way', 'Multi-city'];

  const searchParams = useSearchParams();

  const selectedTab = searchParams.get('flight') || 'Return';

  return (
    <>
      <div className="m-0 flex-1 flex flex-row flex-wrap items-end justify-center gap-[14px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[261px] max-w-full">
          <nav
            className=" -[270px] bg-neutral-100 overflow-hidden rounded-3xs flex flex-row items-start
             justify-start py-1.5 px-2.5 box-border gap-[13px]"
          >
            {FlightTabsVariants.map((flight, index) => (
              <Link
                key={index}
                href={`?flight=${flight}`}
                className={`${
                  selectedTab === flight
                    ? 'text-white px-2 py-1 bg-primary'
                    : ''
                } text-lg transition-colors px-2.5 py-0.5 rounded-full relative`}
              >
                <span className="relative z-10 text-base font-average text-left inline-block min-w-[47px] ">
                  {flight}
                </span>
                {selectedTab === flight && (
                  <motion.span
                    layoutId="pill-tab"
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="absolute inset-0 z-0 bg-primary rounded-31xl"
                  ></motion.span>
                )}
              </Link>
            ))}
          </nav>

          <div className="w-[828px] flex flex-row items-start justify-start py-0 box-border max-w-full">
            <div
              className={`${
                selectedTab === 'Return' ? 'inline-block' : 'hidden'
              } flex-1 flex flex-row flex-wrap
               items-end justify-start max-w-full text-base text-black font-average`}
            >
              {/* <ReturnFlight /> */}
              <ReturnFlight/>
            </div>
            <div
              className={`${
                selectedTab === 'One-way' ? 'inline-block' : 'hidden'
              } flex-1 flex flex-row flex-wrap
               items-end justify-start max-w-full text-base text-black font-average`}
            >
              <OneWayFlight />
            </div>

            <div
              className={`${
                selectedTab === 'Multi-city' ? 'inline-block' : 'hidden'
              } flex-1 flex flex-row flex-wrap
               items-end justify-start max-w-full text-base text-black font-average`}
            >
              <MultiCityFlight />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default FlightPage;
