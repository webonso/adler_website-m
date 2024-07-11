import Image from 'next/image';

const WeeklyDeals = () => {
  return (
    <div className="flex items-center w-[1429px] justify-center mx-auto pt-2 px-5 pb-[26px] box-border max-w-full mt-10">
      <div className="w-[1265px] flex flex-col items-end flex-wrap justify-start gap-[89px] max-w-full mq450:gap-[22px] mq750:gap-[44px]">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-between gap-[13px] max-w-full w-full text-left text-17xl text-black font-average">
          <div className="flex flex-1 gap-3.5 items-start self-start px-5 text-3xl text-black text-opacity-60">
            <Image
              width={60}
              height={60}
              alt="flash icon"
              src="/icons/flash_.png"
              className="shrink-0 aspect-square w-[60px]"
            />
            <div className="self-stretch mq800:max-w-full inline-block min-w-[359px] max-w-full mq450:text-lgi mq450:min-w-full">
              <span className="text-4xl">
                Deal of the Week: Get more for less!
              </span>
              <br />
              <span className="text-2xl text-black">
                Save with our special and time-limited offers.
              </span>
            </div>
            <Image
              width={10}
              height={10}
              src="/icons/arrow_backfront.png"
              className="shrink-0 w-10 aspect-square"
              alt="arrow image"
            />
          </div>
          <div className="flex flex-1 flex-row items-end justify-end gap-[18px] text-6xl">
            <div className="flex items-center justify-center gap-6 px-0 pb-0">
              <div className="relative mq450:text-xl">ATOL PROTECTED</div>
              <div className="size-14 relative">
                <Image
                  fill
                  className="object-contain"
                  alt="logo"
                  src="/icons/Screenshot.png"
                  sizes='(width:56px, height:56px)'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDeals;
