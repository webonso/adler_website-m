'use client';
import { authenticate } from '@/libs/actions';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const LoginForm = () => {
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form
     
        className="p-10 rounded-lg shadow-lg flex flex-col"
      >
        <h1 className="text-xl font-medium mb-4">Admin SignIn Only</h1>
        <label htmlFor="username" className="mb-2">
          Username
        </label>
        <input
          type="text"
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="username"
          name="username"
       
          placeholder="username"
         
        />
        <label htmlFor="" className="mb-2">
          Password
        </label>
        <input
          type="password"
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="password"
      
          name="password"
          placeholder="password"
         
        />
        <button
         
          type="submit"
          className="p-2 border rounded-md bg-purple-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600"
        >
         Login Now
        </button>

        <Link href="/" className="text-center mt-2">
          Home
        </Link>
      
      </form>
    </div>
  );
};

export default LoginForm;

