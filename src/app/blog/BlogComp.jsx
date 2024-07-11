import Image from 'next/image';
import React from 'react';

function BlogComp({ post }) {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[30.5px] pr-[29px] pl-5 box-border max-w-full text-left text-13xl text-black font-average">
      <div className="w-[1097px] flex flex-col items-end justify-start gap-[61.5px] max-w-full mq750:gap-[15px] mq1100:gap-[31px]">
        <div className="w-[786px] flex flex-row items-start justify-end py-0 px-2.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-lgi mq1050:text-7xl">
            The Most Visited Cities in Europe
            </h2>
            <div className="flex flex-col items-start justify-start pt-[31px] px-0 pb-0 text-xl">
              <div className="relative mq450:text-base">12th March, 2024</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex h-full relative flex-col items-start justify-start gap-[54px] mq750:gap-[27px]">
          <div className="relative self-stretch h-[679px] mt-20 max-w-full aspect-[1.61] q800:max-w-full overflow-hidden shrink-0 ">
            <Image
              className=" object-cover"
              loading="lazy"
              alt="Blog post featured image"
              fill
              src={'/pics/IMG-blog.png'}
              sizes="(width:100%, height:670px)"
            />
          </div>
          <div className="relative mt-14 text-3xl self-stretch tex-black mq450:text-lgi mq1050:text-5xl">
            <span className="block">
              We need the pick up location, date and time.
            </span>
            <span className="block">
              Then drop off location, date and time.
            </span>
            <span className="block">And finally, the driver's age.</span>
            <span className="block">&nbsp;</span>
            <span className="block">
              For activities we need just the city, landmark, airport or address
              of the activity.
            </span>
            <span className="block">
              Then the activity start date and end date
            </span>
            <span className="block">&nbsp;</span>
            <span className="block">
              Cruises are different. Out partners advertise the dates, routes,
              dates, prices, etc. Clients can't just choose.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogComp;
