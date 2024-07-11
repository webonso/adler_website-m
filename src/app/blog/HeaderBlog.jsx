'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import Logo from '../../components/Logo';

export default function HeaderBlog() {
  const router = useRouter();

  return (
    <>
      <header className="w-[1462px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full text-left text-17xl text-black font-average">
        <div className="w-[303px] bg-primary flex flex-row items-start justify-start pt-2.5 px-[19px] pb-11 box-border">
          <div className="h-[183px] flex-1 relative max-w-full overflow-hidden">
            <Image
              className="object-cover size-[183px] z-[1]"
              loading="lazy"
              alt=""
              fill
              src="/pics/logo.png"
            />
          </div>
        </div>
        {/* <Logo/> */}
        <div className="w-[323px] flex flex-col items-start justify-start pt-[123px] pb-0 pr-5 pl-0 box-border max-w-full">
          <h2 className="m-0 relative text-inherit font-normal font-inherit whitespace-nowrap">
            Adler Travels Blog
          </h2>
        </div>
        <div className="flex flex-col items-start justify-start pt-[38px] px-0 pb-0">
          <div className="w-20 h-20 relative cursor-pointer">
            <Image
              className="object-cover size-20"
              loading="lazy"
              alt=""
              fill
              src="/icons/arrow_back_FILL0_.png"
              onClick={() => {
                router.back();
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
