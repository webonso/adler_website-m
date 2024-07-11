import Image from 'next/image';
import ActivitiesForm from './SportForm';
import { Fragment } from 'react';

function SportingActivities() {
  return (
    <Fragment>
      <div className="h-screen w-full min-h-[767px] max-md:max-w-full rounded-t-[20px] relative overflow-hidden">
        <Image
          fill
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
          alt="background-image"
          src={'/pics/bgcruises.png'}
          sizes="(width: 100%, height: 100%)"
        />
      </div>
      <section className="self-stretch h-screen relative flex flex-col items-center justify-center gap-[72px] max-w-full mq450:gap-[18px] mq975:gap-[36px]">
        <div className="absolute z-40 bottom-40 w-full mx-auto">
          <ActivitiesForm />
        </div>
      </section>
    </Fragment>
  );
}

export default SportingActivities;
