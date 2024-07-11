"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageUpload() {
const [isLoading, setIsLoading]= useState(false)

  return (
    <label
      htmlFor="upload"
      className="self-stretch flex-1 z-10 rounded-3xs bg-white shadow-2xl box-border flex flex-row items-center 
      justify-center px-[48.5px] gap-[16.5px] max-w-full border-[2px] border-solid border-gainsboro-100"
    >
      <h1 className="text-bold font-average text-[40px] py-2">
        Upload Image Here
      </h1>
      <div className=''>
        <input
          type="text"
          id="upload"
          name="file"
          className="hidden"
          style={{ display: 'none' }}
        />
        <button
          type="submit"
          className="bg-green-800 rounded-full shrink p-10 shadow-sm animate text-white"
        >
          {isLoading ? 'Loading...' : 'Upload'}
        </button>
      </div>
    </label>
  );
}
