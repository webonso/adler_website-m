import Link from 'next/link';
import React from 'react';

function AccessDenied() {
  return (
    <div className="container h-screen flex flex-col gap-5 justify-center items-center">
      <h2>This page belongs to the admin Only!</h2>
      <p>
        Please kindly access the login page to sign-in if you are an Admin here.{' '}
      </p>
      <Link href="/login">Sign In</Link>
    </div>
  );
}

export default AccessDenied;
