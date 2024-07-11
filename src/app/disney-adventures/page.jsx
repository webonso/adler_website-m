import Image from 'next/image';
import DisneyAdventureForm from './DisneyAdventureForm';

export const metadata = {
  title: 'Disney Adventures Page',
  description:
    'Connect with Us with a message today so we can serve you better',
};

export default function DisneyAdventurePage() {
  return (
    <>
      <div className="w-screen min-h-screen h-full relative items-center justify-center overflow-hidden flex flex-col leading-[normal] tracking-[normal] mq450:gap-[78px] mq975:gap-[156px]">
        <section className="h-screen w-full relative overflow-hidden">
          <Image
            fill
            priority
            className="w-full h-[767px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
            alt="background-image"
            src={'/pics/bgdisney.png'}
            sizes="(height: 100%, width: 100%)"
          />
        </section>

        <section className="self-stretch h-screen relative flex flex-col items-center justify-center gap-[72px] max-w-full mq450:gap-[18px] mq975:gap-[36px]">
          <div className="absolute z-40 bottom-40 w-full mx-auto">
            <DisneyAdventureForm />
          </div>
        </section>
      </div>
    </>
  );
}
