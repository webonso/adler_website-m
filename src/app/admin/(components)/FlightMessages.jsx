import React, { useEffect, useState } from 'react';
import Messages from './Message';
import { useRouter } from 'next/navigation';

async function fetchFlight(slug) {
  
  const res = await fetch("http://localhost:3000/api/booking/${slug==='flight'}", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

console.log(fetchFlight);


function FlightMessages() {

// const data  = await fetchFlight()

  const router = useRouter();
  const [messages, setMessages] = useState([]);
  // const { isAuthenticated } = useContext(Context);

  return (
    <>
      <Messages />
      <Messages />
      <Messages />
      <Messages />
    </>
  );
}

export default FlightMessages;
