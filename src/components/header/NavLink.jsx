'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';


export default NavLink;

const ActiveLink = () => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={item.path}
        className={`inline-block m-0 py-[5px] px-0 active:text-black p-2.5 text-center whitespace-nowrap transition duration-150 hover:border-b-primary ${
          pathname === item.path &&
          'relative border-b-solid border-b-[1px] border-b-[#333] text-black after:content-[""] after:absolute left-0 after:-bottom-[3px] after:w-full h-[2px] after:bg-white'
        }`}
      >
        {item.title}
      </Link>
    </div>
  );
};
