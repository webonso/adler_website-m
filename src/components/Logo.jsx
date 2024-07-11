'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <>
      <div className="w-[303px] h-[298px] bg-primary flex flex-col items-start justify-start pb-11 border-l-white border-l-2 border-t-4 border-t-white rounded-l-lg box-border">
        <div className="flex-1 h-full w-full relative max-w-full overflow-hidden">
          <Image
            className="object-cover size-[182] z-[6]"
            alt=""
            fill
            priority
            src="/pics/logo.png"
            sizes="(height: 183px, width : 183px)"
          />
        </div>
      </div>
    </>
  );
}
