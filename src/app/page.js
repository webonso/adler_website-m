import AllCards from '@/components/AllCards';
import Search from '@/components/Search';
import WeeklyDeals from '@/components/WeekDeals';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <section className="flex overflow-hidden flex-col self-stretch pr-16 pb-12 w-full min-h-[793px] max-md:pr-5 max-md:max-w-full">
      <Image
          src="/pics/bg-home.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="object-cover fill"
        /> 
      {/* <section
        className="flex overflow-hidden relative h-screen flex-col items-center px-5 pb-12 w-full min-h-[767px] max-md:max-w-full rounded-t-[20px]"
        style={{
          backgroundImage: 'url(/pics/bg-home.png)',
          backgroundSize: 'cover',
          backgroundHeight: '100vh',
          width: '100%',
        }}
      > */}
        <div className="w-[1429px] mt-[67vh] flex flex-row items-center justify-center pt-0 px-5 pb-[26px] box-border max-w-full">
          <div className="w-[1265px] flex flex-col items-center justify-center gap-[89px] max-w-full mq450:gap-[22px] mq750:gap-[44px]">
            <Search />
          </div>
        </div>
      </section>
      <WeeklyDeals />
      <AllCards />
    </>
  );
}
