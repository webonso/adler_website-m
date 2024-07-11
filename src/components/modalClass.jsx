'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const options = ['Economy', 'Premium Economy', 'Business', 'First Class'];

const ModalClass = ({
count,
  
  selectedOption,
  setSelectedOption,
  selectedClass,
  handleCounts,
  handleAllDropChange,

}) => {
  const router = useRouter();
 

  return (
    <div className="fixed inset-0 bg-black text-black bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="flex flex-col justify-center pb-8 text-base relative bg-white w-full max-w-[300px]">
        <div
          className="place-self-end relative size-6 aspect-square"
          onClick={() => router.back()}
        >
          <Image
            loading="lazy"
            src="/icons/cross.png"
            alt="close modal"
            className="self-end w-6 aspect-square"
            fill
            sizes="(width:24px, height:24px)"
          />
        </div>

        <div className="flex w-full h-full flex-col items-center justify-center mx-auto mt-2">
          <select
            id="select"
            defaultValue={selectedClass}
            name="flightClass"
            onChange={(e)=>handleCounts((e.target.value))}
            className="flex gap-5 justify-between self-center px-5 py-1.5 max-w-full text-black whitespace-nowrap rounded-xl border border-solid border-stone-300 w-[215px]"
          >
            {options.map((option, index) => (
              <option className="" key={index}>
                {option}
              </option>
            ))}
          </select>

          <div className="flex flex-col items-center justify-center px-4 space-y-3 shadow-lg w-full my-4 p-2">
            <div className="flex gap-5 items-center justify-between w-full">
              <p className="text-black whitespace-nowrap">
                {count} adult (18-65)
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCounts(Math.max(0, count - 1))}
                  className="flex justify-center items-center size-5 text-white rounded-full border-2 border-solid border-blue-950"
                  aria-label={`Increase adult numbers`}
                >
                  <span className="flex items-center justify-center text-black">
                    {' '}
                    -{' '}
                  </span>
                </button>

                <button
                  onClick={() => handleCounts(count + 1)}
                  className="flex justify-center items-center w-5 h-5 text-white rounded-full bg-blue-950"
                  aria-label={`Increase adult numbers`}
                >
                  <span className="flex items-center justify-center text-white">
                    +
                  </span>
                </button>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-between w-full">
              <p className="text-black whitespace-nowrap">
                {selectedNum} seniors (65+)
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCounts(Math.max(0, count - 1))}
                  className="flex justify-center items-center w-5 h-5 text-white rounded-full border-2 border-solid border-blue-950"
                  aria-label={`Increase adult numbers`}
                >
                  <span className="flex items-center justify-center text-black">
                    {' '}
                    -{' '}
                  </span>
                </button>

                <button
                  onClick={() =>handleCounts(count + 1)}
                  className="flex justify-center items-center w-5 h-5 text-white rounded-full bg-blue-950"
                  aria-label={`Increase adult numbers`}
                >
                  <span className="flex items-center justify-center text-white">
                    +
                  </span>
                </button>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-between w-full">
              <p className="text-black whitespace-nowrap">
                {count} {count> 1 ? 'children' : 'child'}(0-7)
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCounts(Math.max(count - 1))}
                  className="flex justify-center items-center w-5 h-5 text-white rounded-full border-2 border-solid border-blue-950"
                  aria-label={`Increase adult numbers`}
                >
                  <span className="flex items-center justify-center text-black">
                    {' '}
                    -{' '}
                  </span>
                </button>

                <button
                  onClick={() => handleCounts(count + 1)}
                  className="flex justify-center items-center w-5 h-5 text-white rounded-full bg-blue-950"
                  aria-label={`Increase adult numbers`}
                >
                  <span className="flex items-center justify-center text-white">
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalClass;
