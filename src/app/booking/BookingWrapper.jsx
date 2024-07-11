'use client';
import Image from 'next/image';
import WeeklyDeals from '@/components/WeekDeals';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  {
    title: 'Flights',
    href: '/booking',
    image: '/icons/icons-flight.png',
  },
  {
    title: 'Hotels',
    href: '/booking/hotels',
    image: '/icons/icons8-accommodate.png',
  },
  {
    title: 'Car Hire',
    href: '/booking/carhire',
    image: '/icons/icons8-car-rental.png',
  },
];

const BookingWrapper = ({ children }) => {
  const pathName = usePathname();
  return (
    <div
      className="h-full min-h-screen w-full flex overflow-hidden relative flex-col items-center px-5 pb-12 max-md:max-w-full max-md:max-w-full rounded-t-[20px] "
      style={{
        backgroundImage: 'url(/pics/bg-home.png)',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        minHeight: '100%',
      }}
    >
      <div className="grow self-stretch mt-[50vh] mq450:mt-[100px] flex items-center justify-center">
        <div className=" h-full flex flex-col items-end justify-start pt-0 px-0 pb-[871px] box-border gap-[22px] max-w-full lg:pb-[566px] lg:box-border mq450:pb-[239px] mq450:box-border mq750:h-auto mq1050:pb-[368px] mq1050:box-border">
          {/* booking section  */}
          {/* <BookingSection /> */}
          <div className="w-[1448px] flex flex-row items-start justify-center pt-0 px-5 pb-[57px] box-border max-w-full text-left text-xl text-black font-average">
            <div className="w-[952px] flex flex-row items-start justify-start relative max-w-full">
              <div className="flex-1 rounded-3xs bg-white flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[34px] max-w-full z-[1] mq750:gap-[17px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[1.1px] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[9.4px] max-w-full">
                      <div className="self-stretch h-[29.6px] relative rounded-t-3xs rounded-b-none bg-blue-100 shrink-0 [debug_commit:1de1738] z-[2]" />
                      {/* <BookingNav /> */}

                      <nav className="w-[806px] flex flex-row items-start justify-center pt-0 px-5 pb-[5.5px] box-border max-w-full">
                        <div className="flex flex-row items-start justify-start gap-[35px] max-w-full mq750:flex-wrap mq750:gap-[17px]">
                          {links.map((link, index) => (
                            <Link
                              key={index}
                              href={link.href}
                              className={`${
                                pathName === link.title
                                  ? 'relative border-b-[3px] border-b-[#333] text-black pb-2 '
                                  : null
                              } inline-flex flex-row items-start justify-start py-0 pr-[9px] pl-0 gap-[7px] text-blue-100`}
                            >
                              <div className="h-6 w-6 relative min-h-[24px]">
                                <Image
                                  className="object-cover"
                                  alt="icon links"
                                  priority
                                  fill
                                  src={link.image}
                                  sizes="(height:24px, width:24px)"
                                />
                              </div>
                              <div className="relative inline-block min-w-[74px] z-[2] mq450:text-base">
                                {link.title}
                              </div>
                            </Link>
                          ))}
                          <Link
                            href={'/package-holidays'}
                            className={`${
                              pathName === '/package-holidays'
                                ? 'relative border-b-[3px] border-b-[#333] text-black pb-2 '
                                : null
                            } inline-flex flex-row items-start justify-start py-0 pr-[9px] pl-0 gap-[7px] text-blue-100`}
                          >
                            <div className="relative h-6 w-6 min-h-[24px] z-[2]">
                              <Image
                                className="object-cover"
                                alt="icon links"
                                priority
                                fill
                                src="/icons/icons8-holiday.png"
                                sizes="(height:24px, width:24px)"
                              />
                            </div>

                            <div className="relative z-[2] mq450:text-base">
                              Package Holidays
                            </div>
                          </Link>
                        </div>
                      </nav>

                      <div className="w-[937px] h-3 relative max-w-full">
                        <div className="absolute top-[0px] left-[0px] box-border w-[939px] h-0.5 z-[3] border-t-[2px] border-solid border-whitesmoke" />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWrapper;
{/* <Link
                        href={'/booking/carhire'}
                        className={`${
                          pathname === '/booking/carhire'
                            ? 'relative border-b-[3px] border-b-[#333] text-black pb-2 '
                            : null
                        } inline-flex flex-row items-start justify-start py-0 pr-[9px] pl-0 gap-[7px] text-blue-100`}
                      >
                        <div className="h-6 w-6 relative min-h-[24px]">
                          <Image
                            className="object-cover"
                            alt="icon links"
                            priority
                            fill
                            src={'/icons/icons8-car-rental.png'}
                            sizes="(height:24px, width:24px)"
                          />
                        </div>
                        <div className="relative inline-block min-w-[74px] z-[2] mq450:text-base">
                          Car Hire
                        </div>
                      </Link> */}