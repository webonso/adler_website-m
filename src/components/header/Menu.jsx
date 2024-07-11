'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { menuSlide } from './anim';
import Image from 'next/image';
import Link from 'next/link';
import { NavRoues } from '@/libs/data';
import { useSession } from 'next-auth/react';

const Menu = ({ onClose }) => {
  const pathname = usePathname();

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-screen bg-slate-400 text-white overflow-hidden z-[200] fixed right-0 min-h-screen transition origin-right duration-150 ease-in-out w-[531px] top-0 bottom-0"
      >
        <div
          className="absolute top-5 right-4 size-10 object-cover"
          onClick={onClose}
        >
          <Image
            className="object-cover w-10 h-10"
            loading="lazy"
            alt="close menu icon"
            fill
            sizes="(height: 40px, width : 40px)"
            src="/icons/closemenu.png"
          />
        </div>

        <div className="box-border h-full flex flex-col justify-between pl-[100px]">
          <div className="bg-slate-400 overflow-hidden flex flex-col items-start justify-start pt-[18px] px-0 text-[30px] gap-3 mt-5">
            <div className=" uppercase text-[11px] mb-3 border-b-[rgb(153,153,153)] border-b border-solid" />
            {NavRoues.map((data, index) => {
              return (
                <Link
                  key={index}
                  href={data.path}
                  className={`${
                    pathname === data.path
                      ? 'transition duration-150 text- underline underline-offset-8 decoration-black'
                      : ''
                  } group flex items-center justify-center gap-[12px] whitespace-nowrap transition duration-150 group-hover:border-b-primary hover:border-b-primary`}
                >
                  <div className="h-12 w-12 size-12 relative">
                    <Image
                      className="object-cover w-12 h-12 size-12"
                      alt="icon links"
                      priority
                      fill
                      sizes="(height: 48px, width : 48px)"
                      src={data.icon}
                    />
                  </div>

                  <span className="relative inline-block min-w-[85px] cursor-pointer">
                    {data.title}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="w-[534px] h-[3px] relative box-border max-w-[106%] shrink-0 border-t-[3px] border-solid border-zinc" />
          <Link
            href={'/contact'}
            className=" group self-stretch flex flex-row items-center mt-2 justify-center py-0 px-5 gap-[4px] cursor-pointer text-left text-13xl text-white font-average mq450:flex-wrap"
          >
            <div className="relative size-12">
              <Image
                className="object-cover w-12 h-12 size-12 group-hover:border-b-primary "
                priority
                alt="contact icon"
                fill
                sizes="(height: 48px, width : 48px)"
                src="/icons/contact_support.png"
              />
            </div>

            <span className="relative group-hover:border-b-primary">
              Contact support
            </span>
          </Link>
          <div className="w-[534px] h-[3px] relative box-border max-w-[106%] shrink-0 border-t-[3px] border-solid border-zinc" />
     
            <Link
              href={'/login'}
              className="group flex flex-row items-center mx-auto mt-0 justify-center py-2 gap-[2px] 
            px-4 cursor-pointer text-left text-lg text-white rounded-md border font-average mb-10 "
            >
              <span className="relative group-hover:border-primary">
                Login (Admin)
              </span>
            </Link>
       
          
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
