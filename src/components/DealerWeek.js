import Image from "next/image";

const FrameComponent = () => {
  return (
    <section className="w-[1404px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-6xl text-black font-average">
      <div className="w-[1230px] flex flex-row flex-wrap items-start justify-center gap-[8px] max-w-full">
        <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[11px] pl-0">
          <div className="relative mq450:text-xl">ATOL PROTECTED</div>
        </div>
        <div className="w-[304px] flex flex-col items-start justify-start">
          <Image
            className="w-20 h-20 relative object-cover"
            loading="lazy"
            alt=""
            src="/download-1@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
          <Image
            className="w-[60px] h-[60px] relative object-cover"
            loading="lazy"
            alt=""
            src="/flash-on-fill0-wght400-grad0-opsz24-1@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[396px] max-w-full text-17xl mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[18px] max-w-full mq750:flex-wrap">
            <div className="flex-1 relative inline-block min-w-[359px] max-w-full mq450:text-lgi mq450:min-w-full">
              <p className="m-0">Deal of the Week: Get more for less!</p>
              <p className="m-0 text-5xl text-gray-100">
                Save with our special and time-limited offers.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
              <Image
                className="w-10 h-10 relative object-contain"
                loading="lazy"
                alt=""
                src="/arrow-back-ios-new-fill0-wght400-grad0-opsz24-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
