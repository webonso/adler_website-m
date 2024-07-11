import Image from 'next/image';
import CruisesForm from '@/app/cruises/CruisesForm';

import PortalPopup from '@/components/portal-popup';
import React from 'react';

export default function CruisesPage() {
  return (
    <React.Fragment>
      <div className="h-screen w-full relative overflow-hidden rounded-t-[20px]">
        <Image
          fill
          priority
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
          alt="background-image"
          src={'/pics/bgcruises.png'}
          sizes="(width: 100%, height: 100%)"
        />
      </div>
      <section className="self-stretch h-screen relative flex flex-col items-center justify-center gap-[72px] max-w-full mq450:gap-[18px] mq975:gap-[36px]">
        <div className="absolute z-40 bottom-40 w-full mx-auto">
          <CruisesForm />
        </div>
      </section>
    </React.Fragment>
  );
}
