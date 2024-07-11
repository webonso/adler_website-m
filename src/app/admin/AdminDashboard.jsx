'use client';

import React, { useState } from 'react';
import HotelMessages from './(components)/hotels/HotelMessages';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import FlightMessages from './(components)/FlightMessages';
import { auth } from '@/auth';
import BlogModal from './BlogModal';
import LogoutAdminButton from './LogoutAdmin';

const AdminDashBoard = () => {
  const AdminTabVariants = [
    'Flight',
    'Hotel',
    'Cruises',
    'Packages',
    'Disney',
    'Sporting',
    'Contact',
  ];
  const searchParams = useSearchParams();
  const router = useRouter();

  const isModalOpen = searchParams.get(false);

  const selected = searchParams.get('tab') || 'Flight';

  const showModal = searchParams.get('show');

  return (
    <>
      <main className="w-full min-h-full overscroll-y-auto absolute top-0 right-0 left-0 z-[999] bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[274px] box-border gap-[17px] leading-[normal] tracking-[normal] mq1500:h-auto">
        <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[27px] pl-[17px] box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-row items-start justify-start gap-[34px] shrink-0 [debug_commit:69da668] max-w-full mq825:gap-[17px]">
            <div className="w-[303px] top-0 h-screen overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[24px] text-left text-9xl text-black font-average lg:hidden">
              <nav className="w-[303px] fixed top-0 h-screen overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[24px] text-left text-9xl text-black font-average lg:hidden">
                <Link href={'/'}>
                  {' '}
                  <Logo />
                </Link>

                <div className="flex flex-row items-start justify-start pt-0 px-[29px] pb-16">
                  <div className="flex flex-col text-lg items-start justify-start gap-[10px] cursor-pointer">
                    {AdminTabVariants.map((tab, index) => (
                      <Link
                        key={index}
                        href={`?tab=${tab}`}
                        className={`${
                          selected === tab
                            ? 'text-red-600'
                            : 'text-black hover:text-slate-200 hover:bg-slate-700'
                        } text-lg transition-colors px-2.5 py-0.5 rounded-md relative`}
                      >
                        <span className="relative z-10">{tab}</span>
                        {selected === tab && (
                          <motion.span
                            layoutId="pill-tab"
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="absolute inset-0 z-0 bg-tertiary rounded-md"
                          ></motion.span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-[27px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[47px]">
                    <Link
                      href={`admin/?show=true`}
                      className="relative cursor-pointer text-inherit bg-gray hover:bg-slate-600 px-4 py-2 
                      rounded-2xl hover:text-zinc font-normal transition-all text-xl"
                    >
                      Create Blog
                    </Link>

                    <LogoutAdminButton />
                  </div>
                </div>
              </nav>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border max-w-[calc(100%_-_337px)] lg:max-w-full">
              <div className="self-stretch flex flex-col items-end justify-start gap-[16px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[25px] box-border w-screen max-w-full ">
                  <nav className="h-[108px] w-full lg:flex flex-wrap items-center justify-center py-0 relative gap-[20px] max-w-full hidden text-3xl text-black font-average">
                    {AdminTabVariants.map((tab, index) => (
                      <Link
                        key={index}
                        href={`?tab=${tab}`}
                        className={`${
                          selected === tab
                            ? 'text-red-600'
                            : 'text-black hover:text-slate-200 hover:bg-slate-700'
                        } text-lg transition-colors px-2.5 py-0.5 rounded-md relative`}
                      >
                        <span className="relative z-10">{tab}</span>
                        {selected === tab && (
                          <motion.span
                            layoutId="pill-tab"
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="absolute inset-0 z-0 bg-tertiary rounded-md"
                          ></motion.span>
                        )}
                      </Link>
                    ))}
                  </nav>
                </div>

                <section
                  className="self-stretch flex-col [backdrop-filter:blur(3px)] overflow-y-auto flex items-start justify-center pt-[87px] pb-px pr-5  pl-10 box-border lg:pt-[57px] lg:pb-5
                 lg:box-border gap-[18px] max-w-full z-[1] mq450:h-auto mq450:pt-[37px] mq450:box-border"
                >
                  <div
                    className={`${
                      selected === 'Flight' ? 'inline-block ' : 'hidden'
                    } self-stretch box-border overflow-hidden max-h-full shrink-0 flex flex-col items-start justify-start pt-[13px] px-[27px] pb-[22px] gap-[15px] [debug_commit:69da668]  max-w-full text-left text-sm text-black font-average rounded-3xs`}
                  >
                    <FlightMessages />
                  </div>

                  <div
                    className={`${
                      selected === 'Hotel' ? 'inline-block' : 'hidden'
                    }  self-stretch box-border overflow-hidden max-h-full shrink-0 flex flex-col items-start justify-start pt-[13px] px-[27px] pb-[22px] gap-[15px] [debug_commit:69da668] max-w-full text-left text-sm text-black font-average rounded-3xs`}
                  >
                    <HotelMessages />
                  </div>

                  <div
                    className={`${
                      selected === 'Cruises' ? 'inline-block gap-6' : 'hidden'
                    }  self-stretch box-border overflow-hidden max-h-full shrink-0 flex flex-col items-start justify-start pt-[13px] px-[27px] pb-[22px] gap-[15px] [debug_commit:69da668] max-w-full text-left text-sm text-black font-average rounded-3xs`}
                  >
                    <FlightMessages />
                  </div>

                  <div
                    className={`${
                      selected === 'Packages' ? 'inline-block gap-6' : 'hidden'
                    }  self-stretch box-border overflow-hidden max-h-full shrink-0 flex flex-col items-start justify-start pt-[13px] px-[27px] pb-[22px] gap-[15px] [debug_commit:69da668]
                 max-w-full text-left text-sm text-black font-average rounded-3xs`}
                  >
                    <FlightMessages />
                  </div>

                  <div
                    className={`${
                      selected === 'Contact' ? 'inline-block' : 'hidden'
                    }  self-stretch box-border overflow-hidden max-h-full shrink-0 flex flex-col items-start justify-start pt-[13px] px-[27px] pb-[22px] gap-[15px] [debug_commit:69da668] max-w-full text-left text-sm text-black font-average rounded-3xs`}
                  >
                    <FlightMessages />
                  </div>

                  <div
                    className={`${
                      selected === 'Disney' ? 'inline-block' : 'hidden'
                    }  self-stretch box-border overflow-hidden max-h-full shrink-0 flex flex-col items-start justify-start pt-[13px] px-[27px] pb-[22px] gap-[15px] [debug_commit:69da668] max-w-full text-left text-sm text-black font-average rounded-3xs`}
                  >
                    <FlightMessages />
                  </div>

                  <div
                    className={`${
                      selected === 'Sporting' ? 'inline-block' : 'hidden'
                    }  self-stretch box-border overflow-hidden max-h-full shrink-0 flex flex-col items-start justify-start pt-[12px] px-[10px] pb-[22px] gap-[15px] [debug_commit:69da668] max-w-full text-left text-sm text-black font-average rounded-3xs`}
                  >
                    <FlightMessages />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </main>
      {showModal && <BlogModal />}
    </>
  );
};

export default AdminDashBoard;
