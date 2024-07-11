'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SuccessQuote = ({ onClose }) => {
  const router = useRouter();

  const onButtonClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="w-[674px] flex flex-row items-start justify-start leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto">
      <section className="h-[625px] flex-1 relative max-w-full text-left text-11xl text-gray-100 font-average">
        <div className="absolute top-[0px] left-[calc(50%_-_337px)] shadow-[0px_0px_2px_2px_rgba(0,_0,_0,_0.25)] rounded-t-3xs rounded-b-xl bg-white box-border w-full h-full border-[2px] border-solid border-gainsboro-100">
          <header className="absolute top-[0px] left-[calc(50%_-_337px)] rounded-t-3xs rounded-b-none bg-blue-100 w-[674px] h-[16.7px] z-[1]" />
          <div className="absolute top-[12px] left-[0px] bg-blue-100 w-[250.9px] flex flex-col items-center justify-center p-2.5 box-border z-[2]">
            <Image
              width={220}
              height={220}
              className="w-[217.8px] flex-1 relative max-h-full object-contain"
              loading="lazy"
              alt="image icon"
              src="/pics/1111-2@2x.png"
            />
          </div>
          <h3 className="m-0 absolute top-[287px] left-[191px] text-inherit font-normal font-inherit inline-block w-[291px] z-[3]">
            Your request has been submitted successfully!
          </h3>
          <button
            className="cursor-pointer p-0 bg-blue-100 absolute top-[504px] left-[275px] rounded-3xs box-border w-[124px] h-[49px] z-[3] border-[2px] border-solid border-gainsboro-100"
            onClick={onButtonClick}
          >
            <div className="absolute h-[calc(100%_-_23px)] top-[9px] left-[38px] text-3xl font-average text-white text-left inline-block w-[57px] z-[1] mq450:text-lg">
              Done
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuccessQuote;
