'use client';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import Nav from './Menu';

import Menu from './Menu';
import Logo from '../Logo';
import Link from 'next/link';
import PortalPopup from '../portal-popup';
import { Routes } from '@/libs/data';

export default function Header({ searchParams }) {
  // const isMenuOpen = searchParams.

  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const NavLink = ({ item }) => {
    const pathName = usePathname();

    return (
      <Link
        href={item.path}
        className={`min-w-[100px] inline-block p-2.5 text-center whitespace-nowrap ${
          pathName === item.path &&
          'relative border-b-solid border-b-[2px] border-b-black text-black'
        }`}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <>
      <header className="absolute w-screen max-h-[280px] z-[4] top-0 left-0 right-0 border-x-4 border-x-white">
        <div className="w-full h-full relative flex justify-between rounded-t-31xl">
          <Link href={'/'} className='flex-1'>
            <Logo />
          </Link>
          {/* <nav className="flex flex-1 flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col my-auto max-md:mt-10 max-md:max-w-full  gap-[26px] mq1425:gap-[50px] lg:gap-[10px] mq450:gap-11 ml-0">
              <div className="flex flex-col justify-center items-end px-16 py-2.5 max-md:px-5 ">
                <Image
                  src="/icons/menuopen.png"
                  alt="Navigation icon"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex lg:hidden gap-5 px-5 mt-1.5 text-3xl text-black max-md:flex-wrap">
                {[
                  'Flights',
                  'Hotels',
                  'Cruises',
                  'Package Holidays',
                  'Disney Adventures',
                  'Car Hire',
                ].map((item, index) => (
                  <Link href={item} key={index} className="text-3xl text-black whitespace-nowrap">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </nav> */}

          <nav className="flex w-9/12 lg:hidden relative flex-shrink items-center justify-center mq450:text-3xl text-left text-9xl text-white mq450:hidden mr-20 pr-[1rem]">
            <div className="relative shadow-sm flex items-center text-center justify-center gap-[50px] pt-32 ml-0  text-3xl mq450:text-xl">
              <div className="flex items-center justify-center gap-[26px] mq1425:gap-[50px] lg:gap-[10px] mq450:gap-11 ml-0">
                {Routes.map((link, index) => (
                  <NavLink item={link} key={index} {...link} />
                ))}
              </div>
            </div>
          </nav>

          <div className="flex flex-col items-center justify-center w-full relative top-2 mt-3">
            <Image
              className="flex flex-col place-self-end mr-[200px] lg:mr-6  justify-center size-12 cursor-pointer object-cover z-[2] focus:border-none"
              src="/icons/menuopen.png"
              alt="sidebar"
              width={30}
              priority={true}
              sizes="(height: 48px, width : 48px)"
              height={30}
              onClick={openMenu}
            />
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </>
  );
}
