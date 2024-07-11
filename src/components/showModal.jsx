'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function ShowModal() {
  const [quantity, setQuantity] = useState(1);
  let [age, setAge] = useState();

  // Using this function to update the state of fruit
  // whenever a new option is selected from the dropdown
  let handleFruitChange = (e) => {
    setAge(e.target.value);
  };

  const router = useRouter();

  return (
    <>
      <div className="fixed inset-0 bg-black text-black bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full z-[9999999999] w-full flex items-center justify-center">
        <div className="flex flex-col items-center bg-white justify-center shadow-md gap-2 relative">
          <div className="flex gap-4 items-center ">
            <button
              className="bg-red-600 px-5 py-2 right-3 top-1 absolute shadow-md rounded"
              onClick={() => router.back()}
            >
              Close
            </button>
            <div className="flex flex-col items-center justify-between">
              <p>children</p>
              <div className="flex items-center justify-center">
                <div className="h-2 w-2 rounded-full relative">
                  <Image
                    src={'/'}
                    alt="minus"
                    fill
                    className="hover:text-red-100 cursor-pointer size-4"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  />
                </div>

                <div className="relative size-4 rounded-full">
                  <Image
                    src={'/'}
                    alt="plus"
                    fill
                    className="hover:text-red-100 cursor-pointer"
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </div>
              </div>
            </div>

            <p className="text-body-bold">{quantity}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowModal;
