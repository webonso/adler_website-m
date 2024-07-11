'use client';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ConnectionData } from '@/libs/data';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const AllCards = () => {
  return (
    <section className="h-full items-center justify-center w-full mx-auto">
      <div className="self-stretch flex flex-col items-center justify-center gap-[17px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 box-border max-w-full text-left text-3xl text-black font-average">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[25.5px] max-w-full mb-8">
            {ConnectionData.map((data, index) => {
              return (
                <CardList
                  key={index}
                  {...data}
                  imageUrl={data.ImageUrl}
                  href={data.href}
                  button_text={data.button_text}
                  description={data.description}
                  title={data.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCards;

function CardList({ title, button_text, href, description, imageUrl }) {
  const { ref, inView } = useInView({
    triggerOnce: true,

    threshold: 0.5,
  });

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[330px] max-w-full">
      <div
        style={{ backgroundColor: '#203757' }}
        className="relative self-stretch h-[395px] rounded w-full overflow-hidden shrink-0"
      >
        <Image
          ref={ref}
          fill
          className="object-cover h-full w-full"
          priority
          alt="card image"
          src={imageUrl}
          sizes="(height: 395px)"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)',
          }}
        />
      </div>

      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
        <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[69px] mq450:text-lg">
          {title}
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-smi text-gray">
          <div className="self-stretch relative">{description}</div>
          <Link
            href={href}
            className="cursor-pointer [border:none] pt-[8.5px] pb-[9.5px] pr-3 pl-[21px] bg-primary rounded-11xl flex flex-row items-start justify-start gap-[3px] whitespace-nowrap hover:bg-slategray-100"
          >
            <div className="relative text-sm font-average text-white text-left inline-block min-w-[60px] z-[1]">
              {button_text}
            </div>
            <span className="h-[19px] w-[18px] relative min-h-[19px] z-[1]">
              <Image
                className="object-contain"
                alt="booking-icon"
                fill
                src="/icons/arrow_back.png"
                sizes="(height: 19px, width : 18px)"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
